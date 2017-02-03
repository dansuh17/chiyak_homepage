import React, { Component } from 'react';
import { AtomicBlockUtils, Editor, EditorState, RichUtils } from 'draft-js';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import './ContentEditor.css';
import fblogo from '../img/facebook.png';

// uses the API from facebook/draft.js
class ContentEditor extends Component {
  constructor(props) {
    super(props);

    // initial state of the editor == empty
    this.state = {
      editorState: EditorState.createEmpty(),
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
        {/* The Actual Editor! */}
        <div className={className}>
          <Editor
            blockRendererFn={mediaBlockRenderer}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            ref={(c) => { this.editor = c; }}
            placeholder="Tell a Story..."
          />
        </div>
      </div>
    );
  }
}

export default ContentEditor;
