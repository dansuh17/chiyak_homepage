import React, { Component } from 'react';
import { AtomicBlockUtils, EditorState, RichUtils, convertToRaw } from 'draft-js';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createDndPlugin from 'draft-js-dnd-plugin';
import 'draft-js-image-plugin/lib/plugin.css';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import Client from '../Client';
import './ContentEditor.css';
import fblogo from '../img/facebook.png';

// list of plugins for Unicorn Editor
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const dndPlugin = createDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  dndPlugin.decorator,
);

const imagePlugin = createImagePlugin({ decorator });

const plugins = [focusPlugin, resizeablePlugin, dndPlugin, alignmentPlugin, imagePlugin];

// uses the API from facebook/draft.js
class ContentEditor extends Component {
  constructor(props) {
    super(props);

    // initial state of the editor == empty
    this.state = {
      editorState: EditorState.createEmpty(),
      file: null,
      fileResult: null,
    };

    this.focus = () => this.editor.focus();  // ref editor
    this.onChange = editorState => this.setState({ editorState });  // for every changes

    // function bindings
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onBoldClick = this.onBoldClick.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.addImage = this.addImage.bind(this);
    this.confirmMedia = this.confirmMedia.bind(this);
    this.post = this.post.bind(this);
    this.uploadImageChange = this.uploadImageChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  onBoldClick() {
    // toggles the BOLD button and turns the effect on
    // bolds the selected text
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  handleKeyCommand(command) {
    // the command argument is the string representation of input keys (i.e., Cmd+I)
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    // the code below is a convention - see draft.js tutorial
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  toggleBlockType(blockType) {
    // toggles the appropriate block type (header-one, ordered-list-item, etc)
    this.onChange(RichUtils.toggleBlockType(
      this.state.editorState,
      blockType));
  }

  toggleInlineStyle(inlineStyle) {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      inlineStyle));
  }

  // create an atomic block containing the image
  confirmMedia() {
    const { editorState } = this.state;
    // this is how we create an entity of a content block - which contains
    // image and stays immutable.
    // changed since API 0.10
    // entity should have three properties : type, mutability, data
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      { src: fblogo },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
    );

    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' ',
      ),
    });
  }

  // triggered when button is pressed
  addImage() {
    this.confirmMedia();
  }

  post() {
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    // store the raw version of current editor state
    Client.postNews(convertToRaw(contentState));
  }

  /**
   * Reads in and saves the file when the user selects a file.
   * @param event
   */
  uploadImageChange(event) {
    event.preventDefault();

    const reader = new FileReader();
    const file = event.target.files[0];

    // save the file info when the read is complete
    reader.onloadend = (ev) => {
      this.setState({
        file,
        fileResult: ev.currentTarget.result,
      });
    };

    console.log(`File Read complete: ${file}`);  // eslint-disable-line
    reader.readAsDataURL(file);
  }

  /**
   * Upload the image file to server.
   * @param event
   */
  uploadImage(event) {
    event.preventDefault();
    console.log('Uploading -', this.state.file);  // eslint-disable-line
    Client.imageFileUpload(this.state.file);
  }

  focus() {
    this.editor.focus();
  }

  /**
   * RENDER
   * @returns {XML}
   */
  render() {
    const { editorState } = this.state;

    // hide placeholder when editing
    // TODO: Doesn't seem to work
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    /**
      Media Component that wraps the Image tag
     */
    const Media = (props) => {
      // entityKey is a string key associated with that entity when it was created
      const entity = contentState.getEntity(props.block.getEntityAt(0));
      // remember that entity should contain type, mutability, and data
      const { src } = entity.getData();
      const type = entity.getType();

      let media;
      if (type === 'image') {
        media = <img src={src} alt="#" />;
      }
      return media;
    };

    // the function to pass on to blockRendererFn
    function mediaBlockRenderer(block) {
      // we can know this is atomic since we used AtomicBlockUtils to create it
      if (block.getType() === 'atomic') {
        return {
          component: Media,
          editable: false,
        };
      }
      return {};  // TODO: better way of returning nothing?
    }

    return (
      <div>
        <button onClick={this.onBoldClick}>Bold</button>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <button onMouseDown={this.addImage}>Add Image</button>
        <button onMouseDown={this.post}>Post</button>
        <br />
        <form onSubmit={this.uploadImage}>
          <input type="file" onChange={this.uploadImageChange} name="myfile" accept="image/*" />
          <button type="submit" onClick={this.uploadImage}>Upload</button>
        </form>
        <div  // eslint-disable-line jsx-a11y/no-static-element-interactions
          className={className}
          onClick={this.focus}
        >
          <Editor
            blockRendererFn={mediaBlockRenderer}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            ref={(c) => { this.editor = c; }}
            placeholder="Tell a Story..."
            plugins={plugins}
          />
          <AlignmentTool />
        </div>
      </div>
    );
  }
}

export default ContentEditor;
