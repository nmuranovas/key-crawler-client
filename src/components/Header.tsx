import React from 'react'
import { Link } from 'react-router-dom'
import FindInWorldSvg from '../images/find-in-the-world.svg';

const Header = () => {
    return (
        <header className="p-3 border-b bg-gray-100 shadow-lg">
            <div className="flex justify-between max-w-5xl mx-auto">
                <Link className="flex align-baseline" to="/">
                    <svg className="w-10 h-10 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 192.905 192.905"><g xmlns="http://www.w3.org/2000/svg"><path d="M190.707 180.101l-47.078-47.076c11.702-14.072 18.752-32.143 18.752-51.831C162.381 36.423 125.959 0 81.192 0 36.422 0 0 36.423 0 81.194c0 44.767 36.422 81.188 81.192 81.188 19.688 0 37.759-7.05 51.831-18.75l47.079 47.077a7.477 7.477 0 005.303 2.196 7.5 7.5 0 005.302-12.804zM15 81.194C15 44.694 44.693 15 81.192 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.188-66.189 66.188C44.693 147.381 15 117.69 15 81.194z" data-original="#000000"/><path d="M81.19 39.847c-22.797 0-41.344 18.547-41.344 41.344s18.547 41.344 41.344 41.344c22.798 0 41.346-18.547 41.346-41.344S103.987 39.847 81.19 39.847zm28.726 35.344h-9.658c-.401-6.594-1.472-13.098-3.254-18.698 6.517 4.186 11.279 10.871 12.912 18.698zm-28.725 35.25c-2.003-1.292-6.107-9.173-7.052-23.25h14.104c-.946 14.081-5.05 21.96-7.052 23.25zm-7.052-35.25c.945-14.077 5.048-21.958 7.052-23.25 2.003 1.29 6.107 9.169 7.052 23.25H74.139zm-8.763-18.7c-1.781 5.601-2.851 12.105-3.253 18.699h-9.658c1.632-7.826 6.395-14.511 12.911-18.699zm-12.912 30.7h9.658c.402 6.594 1.472 13.099 3.253 18.699-6.515-4.188-11.278-10.873-12.911-18.699zm44.54 18.698c1.782-5.601 2.853-12.104 3.254-18.698h9.658c-1.633 7.826-6.395 14.511-12.912 18.698z" data-original="#000000"/></g></svg>
                    <h3 className="my-auto ml-2 text-3xl font-bold text-gray-600">Key Crawler</h3>
                </Link>
                <nav className="flex align-middle">
                    <ul className="list-none float-right my-auto">
                        <li className="inline-block mr-4">
                            <Link to="/" className="text-lg text-gray-500">Home</Link>
                        </li>
                        <li className="inline-block">
                            <Link to="/" className="text-lg text-gray-500">Search</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
