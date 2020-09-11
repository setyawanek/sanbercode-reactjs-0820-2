import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "./nav.css"
import { ThemeContext } from "./theme";


const Nav = () => {
  const [theme] = useContext(ThemeContext)


  return (
    <nav style={{ background: theme === "dark" ? "Black" : "white" }}>
      <ul>
        <li className="box demo">
          <Link to="/">Tugas 9</Link>
        </li>
        <li className="box demo">
          <Link to="/tugas10">Tugas 10</Link>
        </li>
        <li className="box demo">
          <Link to="/tugas11">Tugas 11</Link>
        </li>
        <li className="box demo">
          <Link to="/tugas12">Tugas 12</Link>
        </li>
        <li className="box demo">
          <Link to="/tugas13">Tugas 13</Link>
        </li>
        <li className="box demo">
          <Link to="/tugas14">Tugas 14</Link>
        </li>
        <li className="box demo">
          <Link to="/tugas15">Tugas 15</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav