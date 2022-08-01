import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Element} from "../common/FormsControls/FormControls";

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'textarea'} component={Element} name={'login'}  placeholder={'Login'} validate={[required]}/>
            </div>
            <div>
                <Field type={'textarea'} component={Element} name={'password'}  placeholder={'Password'} validate={[required]}/>
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
