import React, { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';
import PropTypes from 'prop-types';

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });

        editor.on('change', () => {
            const content = editor.getMarkdown();
            onContentChange(content);
        });

        return () => {
            editor.destroy();
        };
    }, [onContentChange]);

    return <div ref={editorRef}></div>;
};

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;
