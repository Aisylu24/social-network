import React from "react";
import s from './FormControls.module.css'

type TextareaPropsType = {
    input: any,
    meta: any
    placeholder: string
}


export const Textarea: React.FC<TextareaPropsType> = ({input, meta,...restProps}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
             <div>
            <textarea {...input} {...restProps} />
             </div>
            <span>{hasError && meta.error}</span>
         </div>
    )
}


export const Input: React.FC<TextareaPropsType> = ({input, meta,...restProps}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...restProps} />
            </div>
            <span>{hasError && meta.error}</span>
        </div>
    )
}
