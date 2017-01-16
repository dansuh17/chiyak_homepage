import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import BlockStyleControls from './BlockStyleControls';

// uses the API from facebook/draft.js
class ContentEditor extends Component {
  constructor(props) {
    super(props);
    // initial state of the editor == empty
    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.focus = () => this.editor.focus();  // ref editor
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onBoldClick = this.onBoldClick.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
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
    // toggles the appropriate block type (H1, H2, Underline, etc)
    this.onChange(RichUtils.toggleBlockType(
      this.state.editorState,
      blockType));
  }

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <button onClick={this.onBoldClick}>Bold</button>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          ref={(c) => { this.editor = c; }}
          placeholder="Tell a Story..."
        />
      </div>
    );
  }
}

export default ContentEditor;
