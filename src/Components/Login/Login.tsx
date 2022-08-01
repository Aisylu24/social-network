import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={'login'}  placeholder={'Login'}  component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={'password'}  placeholder={'Password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field  name={'rememberMe'} type={'checkbox'} component={'input'} validate={[required]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    );
};

const Login = () => {
    const onSubmit = (formData: FormDataType)=> {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'Login'
})(LoginForm)
