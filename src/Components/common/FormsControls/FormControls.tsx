import React from "react";
import s from './FormControls.module.css'

type TextareaPropsType = {
    input: any,
    meta: any
    placeholder: string
    type: any
}

export const Element:React.FC<TextareaPropsType> = ({input, meta, type, ...restProps }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {
                    type === "input"
                    ? <input {...input} {...restProps} />
                    : <textarea {...input} {...restProps} />
                }
            </div>
              <span>{hasError && meta.error}</span>
        </div>
    )
}

