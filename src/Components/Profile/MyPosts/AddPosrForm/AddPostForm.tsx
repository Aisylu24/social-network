import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props: any) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'Add your new post'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm)