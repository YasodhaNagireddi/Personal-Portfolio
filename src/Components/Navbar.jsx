import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    const content = <>
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900'>
            <ul className='text-center text-xl p-20'>
                <Link spy={true} smooth={true} to='/'>
                    <li classname='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
                </Link>
                <Link spy={true} smooth={true} to='/about'>
                    <li classname='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
                </Link>
                <Link spy={true} smooth={true} to='/experience'>
                    <li classname='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Experience</li>
                </Link>
                <Link spy={true} smooth={true} to='/skills'>
                    <li classname='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Skills</li>
                </Link>
                <Link spy={true} smooth={true} to='/projects'>
                    <li classname='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Projects</li>
                </Link>
                <Link spy={true} smooth={true} to='/contact'>
                    <li classname='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
                </Link>
            </ul>

        </div>
    </>
    return (
        <nav>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold'>Logo</span>
                </div>
                <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                            <Link spy={true} smooth={true} to='/'>
                                <li className='hover:text-[#1484da] transition border-b-2 border-slate-900 hover:border-[#1484da] cursor-pointer' >Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to='/about'>
                                <li className='hover:text-[#1484da] transition border-b-2 border-slate-900 hover:border-[#1484da] cursor-pointer' >About</li>
                            </Link>
                            <Link spy={true} smooth={true} to='/experience'>
                                <li className='hover:text-[#1484da] transition border-b-2 border-slate-900 hover:border-[#1484da] cursor-pointer' >Experience</li>
                            </Link>
                            <Link spy={true} smooth={true} to='/skills'>
                                <li className='hover:text-[#1484da] transition border-b-2 border-slate-900 hover:border-[#1484da] cursor-pointer' >Skills</li>
                            </Link>
                            <Link spy={true} smooth={true} to='/projects'>
                                <li className='hover:text-[#1484da] transition border-b-2 border-slate-900 hover:border-[#1484da] cursor-pointer' >Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to='/contact'>
                                <li className='hover:text-[#1484da] transition border-b-2 border-slate-900 hover:border-[#1484da] cursor-pointer' >Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div>
                    {
                        click && content
                    }
                </div>

                <button className='block sm:hidden transition' onClick={handleClick}>
                    {
                        click ? <FaTimes /> : <CiMenuFries />
                    }
                </button>

            </div>
        </nav>
    );
}

export default Navbar;
