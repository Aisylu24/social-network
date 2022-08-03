import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormControls";

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props: any) => {
     
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field elementType={'textarea'} component={Element} name={'newMessage'} placeholder={'Enter your message'} validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)