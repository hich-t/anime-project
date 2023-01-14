import React from "react"


const Welcome = () => {

return(

    <div className="welcomeframe">
    <img className="welcomelogoanime" src="/logo-animedb.png" alt="logo_animedb" />
    <input  className="welcomeinput" placeholder="Login"/>
    <input  className="welcomeinput"  placeholder="Password"/>
    <p className="welcomeframecharacters">Enter as a guest ?</p>
    <p className="welcomebuttonguest">いくぞ !</p>
    
    </div>

)
}

export default Welcome