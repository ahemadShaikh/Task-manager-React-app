import React, { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
    const [theme, changeTheme] = useState('dark-mode');
    useEffect(()=>{
            document.body.className = theme;
    }, [theme]);
  return (
    <>
    <nav className='row pt-3'>
    <div className="col-12 d-flex">
        <h1 className='navHeading'>taskManager🧑‍💼</h1>
        <div onClick={()=>(theme==='dark-mode')?changeTheme('light-mode'):changeTheme('dark-mode')} className="themes">
            {(theme==='dark-mode')?<MdDarkMode className='theme-icon' />:<MdLightMode className='theme-icon' />}
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar