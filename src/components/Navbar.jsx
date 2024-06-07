//! Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-[#1f1f1f] sticky top-0 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MDxTech</span>
                    </NavLink>
                    <button id="mobile-menu-toggle" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#3f3f3f] dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="transition-all duration-200 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
                            <li className="sm:hover:underline sm:underline-offset-8 decoration-blue-600">
                                <NavLink
                                    to="/"
                                    className={({isActive})=> `${ isActive ? "underline decoration-blue-600 text-blue-600" : "" } block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"`}
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="sm:hover:underline sm:underline-offset-8 decoration-blue-600">
                                <NavLink
                                    to="/skills"
                                    className={({isActive})=> `${ isActive ? "underline decoration-blue-600 text-blue-600" : "" } block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-[#3f3f3f] dark:hover:text-white md:dark:hover:bg-transparent`}
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li className="sm:hover:underline sm:underline-offset-8 decoration-blue-600">
                                <NavLink
                                    to="/projects"
                                    className={({isActive})=> `${ isActive ? "underline decoration-blue-600 text-blue-600" : "" } block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-[#3f3f3f] dark:hover:text-white md:dark:hover:bg-transparent`}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="sm:hover:underline sm:underline-offset-8 decoration-blue-600">
                                <NavLink
                                    to="/services"
                                    className={({isActive})=> `${ isActive ? "underline decoration-blue-600 text-blue-600" : "" } block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-[#3f3f3f] dark:hover:text-white md:dark:hover:bg-transparent`}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="sm:hover:underline sm:underline-offset-8 decoration-blue-600">
                                <NavLink
                                    to="/contact"
                                    className={({isActive})=> `${ isActive ? "underline decoration-blue-600 text-blue-600" : "" } block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-[#3f3f3f] dark:hover:text-white md:dark:hover:bg-transparent`}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar