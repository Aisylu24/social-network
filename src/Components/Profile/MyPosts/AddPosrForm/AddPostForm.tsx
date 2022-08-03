import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Element} from "../../../common/FormsControls/FormControls";

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  elementType={'textarea'} component={Element} name={'newPostText'} placeholder={'Add your new post'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm)