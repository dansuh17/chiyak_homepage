import React, { PropTypes } from 'react';
import StyleButton from './StyleButton';
import './InlineStyleControls.css';

// inline styles predefined by draft.js
const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props) => {
  // gets the current inline style of selected text region
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />)}
    </div>
  );
};

InlineStyleControls.propTypes = {
  editorState: PropTypes.any.isRequired,  // eslint-disable-line
  onToggle: PropTypes.func.isRequired,
};

export default InlineStyleControls;
