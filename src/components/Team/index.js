import {Component} from 'react'

import './index.css'

class Team extends Component{
    render(){
        return(
            <div className='team-container' >
                <div className='team-heading-container' >
                    <h1 className='team-heading-span' >Get direct</h1> 
                    <h1 className='team-heading'>knowledge and insight.</h1>
                </div>
                <div className='team-card-container' >
                    <div className='team-card-1' ></div>
                    <div className='team-card-2' ></div>
                    <div className='team-card-3' ></div>
                </div>
                <div className='team-market-container' >
                    <div className='tm-left' >
                        <div className='team-market-left-part' >
                                <h1 className='tm-span' >300</h1>
                                <h1 className='tm-text' >creators</h1>
                            </div>
                            <div className='team-market-left-part' >
                                <h1 className='tm-span' >14.4K</h1>
                                <h1 className='tm-text' >users</h1>
                            </div>
                            <div className='team-market-left-part' >
                                <h1 className='tm-span' >9.11K</h1>
                                <h1 className='tm-text' >session</h1>
                            </div>
                    </div>
                    <div className='tm-right' >
                            <h1 className='tm-right-text' >Explore the marketplace</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <rect width="64" height="64" rx="32" fill="#FFB84C"/>
                                <path d="M26 20L38 32L26 44" stroke="#2B2730" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team