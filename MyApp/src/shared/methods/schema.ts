
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter valid Email')
        .required('Email Address is Required.'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        )
        .required('Password is required.'),
});

export const signUpSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required("Name is required"),
    mobile: yup.string().length(10, "Invalid phone number").required("Phone number is required"),


    email: yup
        .string()
        .email('Please enter valid Email')
        .required('Email Address is Required.'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        )
        .required('Password is required.'),
});