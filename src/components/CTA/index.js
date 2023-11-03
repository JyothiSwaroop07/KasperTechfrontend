import {Component} from 'react'

import './index.css'

class CTA extends Component{
    render(){
        return(
            <div className='cta-container' >
                <h1 className='cta-heading' >Engage without limits</h1>
                <p className='cta-para' >Join a growing community and talk directly with your favorites creators</p>
                <button type="button" className='cta-btn' >Get Started</button>
            </div>
        )
    }
}
export default CTA