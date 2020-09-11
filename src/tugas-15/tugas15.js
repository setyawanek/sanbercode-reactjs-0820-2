import React, { useContext } from 'react'
import './nav.css'
import { ThemeContext } from "./theme"



const Tugas15 = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
}
    return (
        <>
        <button className="button" onClick={changeTheme}> Change Navbar to {theme === "dark" ? "Light Theme" : "Dark Theme"}</button>
        </>
    )
}

export default Tugas15