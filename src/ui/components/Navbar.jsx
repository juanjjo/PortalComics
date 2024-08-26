import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navitate = useNavigate();
    const onLogout = ()=>{
        navitate('/login');
    }
    return (
        <>
            <nav className="bg-[#16161d] p-4">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className="lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">

                        <NavLink
                            className={({ isActive }) => `px-4 py-2 hover:text-orange-600 ${isActive ? 'text-white' : 'text-slate-400'}`}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `px-4 py-2 hover:text-orange-600 ${isActive ? 'text-white' : 'text-slate-400'}`}
                            to="dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `px-4 py-2 hover:text-orange-600 ${isActive ? 'text-white' : 'text-slate-400'}`}
                            to="search"
                        >
                            search
                        </NavLink>
                        {/* <NavLink
                            className={({ isActive }) => `px-4 py-2 hover:text-orange-600 ${isActive ? 'text-white' : 'text-slate-400'}`}
                            to="login"
                        >
                            login
                        </NavLink> */}
                    </div>
                    <div className='text-white'>
                        <ul>
                            <span className='px-4 py-2 hover:text-orange-600'>juanjo</span>
                            <button className='px-4 py-2 hover:text-orange-600'
                            onClick={onLogout}>Logout</button>
                        </ul>
                    </div>

                    <div className="lg:hidden">
                        <button className="text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>


                </div>

            </nav>

        </>
    )
}
