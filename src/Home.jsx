import React from 'react';
import fb from "./fb.svg";
import Navs from './Navs';

const bg = <img src = {process.env.PUBLIC_URL + 'bg.jpg'} width = "1366" height = "550"/>
const bg1 = <img src = {process.env.PUBLIC_URL + 'bg1.jpg'} width = "500" height = "550"/>

function Home(){
    return(
        <>
            <center>
                <div className = "bg">
                    <Navs/>
                    <div className="h2s">Hello, This is Balram, Web-Dev</div>
                    {bg}

                </div>
            </center>
            <center>
                <div className="head">
                    Software Developer
                </div>
            </center>
            <p id = "para">
                Software Developer is the Trending Technology which will soon lead the whole World.It includes two variations Front-End Developer and the Back-End Developer.Front-End includes the UI which can be done by HTML, CSS and Javascript.And backend includes many programming languages like Python,C and Java,etc.Full Stack Developer is the one who knows Front-End as well as Back-End Interfaces!</p>
            <div className="bg1"> {bg1}</div>
            <div className="social">
                <a href = "https://www.facebook.com/"><img src = {fb} id = "fb" width = "30px"/></a>
                <a href = "https://www.instagram.com/____balram_/"><i className="fab fa-instagram"></i></a>
            </div>
        </>
    )
}


export default Home;