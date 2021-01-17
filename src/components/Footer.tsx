import React from 'react'

const Footer: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <footer className={"text-center max-w-5xl mx-auto border-t py-4 align-middle" + ` ${className}`}>
            <small className="text-gray-500">Made by <a href="https://github.com/nmuranovas">Nerijus Muranovas</a> @ {new Date().getUTCFullYear()}</small>
        </footer>
    )
}

export default Footer
