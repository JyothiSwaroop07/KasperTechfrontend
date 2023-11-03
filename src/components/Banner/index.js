import {Component} from 'react'
import './index.css'

class Banner extends Component{
    render(){
        return(
            <div className='banner-container' >
                <div className='banner-row-container' >
                    <div className='banner-heading-container' >
                        <h1 className="home-head-text">Learn from your favorite creators about <span className='home-head-text-span' >fantasy reports</span></h1>
                    </div>
                    <div className="frame">
                    <div className='video-calls-container'>
                    <div className="video-calls-container-svg">
                    <div className="video-calls-container-1">
                        <div className="text-cont">
                        <p className="text11">1:1</p>
                        </div>
                        <div className="text-cont-2">
                        <p className="textvc">video calls</p>
                    </div>
                    </div>
                    </div>
                    
                    </div>
                    </div>
                    
                </div>
                <div className='banner-img' ></div>
            </div>
        )
    }
}
export default Banner