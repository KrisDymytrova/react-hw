import * as Yup from 'yup';

const validationLoginForm = Yup.object().shape({
    login: Yup.string()
        .oneOf(['demo@login.com'], 'Invalid login')
        .trim()
        .required('Login is required'),
    password: Yup.string()
        .oneOf(['adminadmin'], 'Invalid password')
        .trim()
        .required('Password is required'),
});

export default validationLoginForm;
