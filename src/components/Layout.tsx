import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container mx-auto max-w-5xl p-6" >
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout
