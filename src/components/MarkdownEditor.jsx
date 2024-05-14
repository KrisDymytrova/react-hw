import React, { Component } from 'react';
import Editor from '@toast-ui/editor';
import PropTypes from 'prop-types';

class MarkdownEditor extends Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        const { onContentChange } = this.props;

        this.editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
        });

        this.editor.on('change', () => {
            const content = this.editor.getMarkdown();
            onContentChange(content);
        });
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    render() {
        return <div ref={this.editorRef}></div>;
    }
}

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;
