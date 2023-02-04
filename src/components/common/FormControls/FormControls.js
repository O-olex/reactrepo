import React from "react"
import cl from "./FormControls.module.css"


export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={cl.formControl + " " + (hasError ? cl.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={cl.formControl + " " + (hasError ? cl.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}