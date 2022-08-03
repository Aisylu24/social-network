import React, {useEffect} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Element} from "../common/FormsControls/FormControls";
import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";
import {useNavigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from "../common/FormsControls/FormControls.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field elementType={'input'} component={Element} name={'email'} placeholder={'Email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field elementType={'input'} component={Element} name={'password'} placeholder={'Password'}
                       validate={[required]} type={'password'}/>
            </div>
            <div>remember me
                <Field component={Element} elementType={'input'} name={'rememberMe'} type={'checkbox'} />
            </div>
            {
                props.error && <div className={s.formError}>{props.error}</div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>

    );
};


const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


type LoginPropsType = MapDispatchToProps & MapStateToPropsType

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    let navigate = useNavigate()

    useEffect(()=>{
        if(props.isAuth){
            return navigate("../profile")
        }
    }, [props.isAuth])

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

type MapDispatchToProps = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void
    logoutThunkCreator: () => void
}

export const LoginContainer = connect(mapStateToProps,{loginThunkCreator,logoutThunkCreator})(Login)


