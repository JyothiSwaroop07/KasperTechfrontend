import { Component } from "react";
import Banner from "../Banner";
import CTA from "../CTA";
import Features from "../Features";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Team from "../Team";

import './index.css'

class Home extends Component{

    render(){
        return(
        <div className="main-container" id="homeSection">
            <div className="home-container"  >
                <Navbar/>
                <Banner/>
            </div>
            <div className="home-container1" >
                <Team/>
            </div>
            <div className="home-container" >
                <Features/>
            </div>
            <div className="home-container2" >
                <CTA/>
            </div>
            <div className="home-container2" >
                <Footer/>
            </div>
            
        </div>
        )
    }
}

export default Home