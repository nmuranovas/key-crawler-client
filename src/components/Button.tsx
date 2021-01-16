import React from 'react'

export interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    variant?: "primary" | "secondary"
}

const Button : React.FC<ButtonProps> = ({children, onClick, variant = "primary"}) => {
    let colorClasses;
    switch (variant) {
        case "primary":
            colorClasses = "bg-blue-700 text-white";
            break;
        case "secondary":
            colorClasses = "bg-gray-400 text-white";
            break;
        default:
            throw new Error(`Variant ${variant} not implemented.`)
    }

    return (
        <button onClick={onClick} className={`px-2 py-1 rounded ${colorClasses} focus:outline-none focus:ring focus:border-blue-400`}>
            {children}
        </button>
    )
}

export default Button
