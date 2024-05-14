Реализуйте компонент `<MarkdownEditor />`, который является React оберткой плагина @toast-ui/editor - [https://github.com/nhn/tui.editor/tree/master/apps/editor]() . Этот плагин позволяет встроить в страницу Markdown-редактор.

Использование:

`const editor = new Editor({
el: element,
hideModeSwitch: true,
});

editor.addHook('change', () => {
const content = editor.getMarkdown();
// код который будет вызван при изменении содержимого редактора
});`

Компонент принимает на вход функцию как свойство onContentChange, которая вызывается при каждом изменении в редакторе. Функция принимает на вход содержимое редактора. Его использование видно в файле src/index.jsx:

`import '@toast-ui/editor/dist/toastui-editor.css';

import ReactDOM from 'react-dom';
import React from 'react';

import MarkdownEditor from './MarkdownEditor.jsx';

ReactDOM.render(
<MarkdownEditor onContentChange={console.log} />,
document.getElementById('container'),
);`
