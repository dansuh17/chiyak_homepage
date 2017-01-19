import React, { Component } from 'react';
import { AtomicBlockUtils, Editor, EditorState, Entity, RichUtils } from 'draft-js';
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
    // Entity.create(<type>, <mutability>, <data>)
    const entityKey = Entity.create('image', 'IMMUTABLE', { src: fblogo });
    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        editorState,
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

    // Media that wraps the Image tag
    const Media = (props) => {
      const entity = Entity.get(props.block.getEntityAt(0));
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
