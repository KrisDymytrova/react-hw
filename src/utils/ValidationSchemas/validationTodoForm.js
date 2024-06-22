import * as Yup from 'yup';

const validationTodoForm = Yup.object({
    title: Yup.string()
        .required('Please fill out the Title field'),
    body: Yup.string()
        .required('Please fill out the Description field')
})

export default validationTodoForm;