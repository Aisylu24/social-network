import React from "react";
import s from './FormControls.module.css'

type ElementPropsType = {
    input: any,
    meta: any
    placeholder: string
    elementType: any
}

export const Element:React.FC<ElementPropsType> = ({input, meta, elementType, ...restProps }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {
                    elementType === "input"
                    ? <input {...input} {...restProps} />
                    : <textarea {...input} {...restProps} />
                }
            </div>
              <span>{hasError && meta.error}</span>
        </div>
    )
}

// export const Element:React.FC<TextareaPropsType> = ({input, meta, type, ...restProps }) => {
//     const ElementType = type
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
//             <div>
//                 <ElementType {...input} {...restProps}/>
//             </div>
//             <span>{hasError && meta.error}</span>
//         </div>
//     )
// }