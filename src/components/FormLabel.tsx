import React from 'react'

export interface FormLabelProps {
    htmlFor?: string | undefined
}

const FormLabel: React.FC<FormLabelProps> = ({ children, htmlFor }) => {
    return (
        <label htmlFor={htmlFor}>{children}</label >
    )
}

export default FormLabel
