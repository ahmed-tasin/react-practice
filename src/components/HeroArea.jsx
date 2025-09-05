import "./Hero.css" //normal css
import Styles from "./heroArea.module.css" //module css

function Hero(){
    const MyStyle = {
        color:"yellow",
        backgroundColor:"black",
        textAlign:"center"
    }


    return(
        <>
            <h1 style={{backgroundColor:"green", color:"white", textAlign:"center"}}>This is hero <section></section></h1>
            <h2 id="Heading2">This section design comes from externalcss</h2>
            <h3 style={MyStyle}>This style coming from object</h3>

            <div className={Styles.HeroArea}>
            </div>

        </>
    )
}

export default Hero;