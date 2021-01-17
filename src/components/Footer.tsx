import React from 'react'

const Footer = () => {
    return (
        <footer className="fixed bottom-0 text-center w-full bg-gray-300 shadow-2xl">
            <hr />
            <section className="my-4">
                <small className="text-gray-500">Copyright &copy; {new Date().getUTCFullYear()} Nerijus Muranovas. All Rights Reserved</small>
            </section>
        </footer>
    )
}

export default Footer
