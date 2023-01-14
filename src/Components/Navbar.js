import React, { useContext} from "react.js"
import { AnimeContext } from "../context/AnimeContext";


const Navbar = () => {

    const {value2, value3} = useContext(AnimeContext)
    const [input, setInput] = value3
    const [query, setQuery] = value2

    const handleClick = (e) => {
        e.preventDefault()    
        console.log(input)
            setQuery(input)  }

    return(
        
        <div className="navbar">
        <img className="welcomelogoanime" src="/logo-animedb.png" alt="logo_animedb" />
        <form onSubmit={handleClick}>
        <input className='navbarsearch'
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
         />
        <button className="navbarsearchbutton" type='submit'>いくぞ !</button>
        </form>
        </div>
    )
}

export default Navbar