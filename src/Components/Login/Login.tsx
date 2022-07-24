import React from 'react';
import {Field, reduxForm} from "redux-form";

const Login = (props:any) => {
    const onSubmit = (formData: any)=> {
        console.log('formData')
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;


const LoginForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={'login'}  placeholder={'Login'}  component={'input'}/>
            </div>
            <div>
                <Field name={'password'}  placeholder={'Password'} component={"input"}/>
            </div>
            <div>
                <Field  name={'remember me'} type={'checkbox'} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    );
};

const ReduxLoginForm = reduxForm({
    form: 'Login'
})(LoginForm)
