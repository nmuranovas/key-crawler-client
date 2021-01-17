import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
    return (
        <div className="h-screen flex flex-col pt-4">
            <Header className="w-full mx-auto max-w-5xl "/>
            <main className="w-full mx-auto max-w-5xl pt-6 flex-grow" >
                {children}
            </main>
            <Footer className="w-full mx-auto max-w-5xl"/>
        </div>
    )
}

export default Layout
