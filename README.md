Реализуйте и экспортируйте по умолчанию компонент Progress, который принимает свойство percentage и рисует статический прогресс бар.

Использование: <pre> `<Progress percentage={40} />` </pre>

Результат: <pre> `<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar" style="width: 40%;"></div></div>` </pre>

Стиль width – вычисляется динамически, атрибут aria-valuenow – вычисляется динамически
