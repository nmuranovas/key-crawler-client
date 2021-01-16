import React from 'react'

export interface FormControlProps {
    type?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    placeholder?: string,
    id?: string
}

const FormControl: React.FC<FormControlProps> = ({ type, onChange, value, placeholder, id }) => {
    return (
        <input
            id={id}
            className={`border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-400`}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default FormControl
