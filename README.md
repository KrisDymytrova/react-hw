Реализуйте компонент Alert, который отрисовывает алерт бутстрапа. Компонент принимает на вход два свойства:

text — отображаемый текст
type — тип алерта, может принимать одно из следующих значений: primary, secondary, success, danger, warning, info, light, dark;

Пример использования: <pre> `<Alert type="warning" text="what is love?" />;` </pre>

Вывод: <pre> `<div class="alert alert-warning" role="alert">what is love?</div>` </pre>
