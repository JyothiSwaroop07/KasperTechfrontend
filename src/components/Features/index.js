import {Component} from 'react'

import './index.css'

class Features extends Component{
    render(){
        return(
            <div className='features-container' >
                <div className='features-section-left' >
                    <h1 className='features-section-left-heading' >Why become a creator?</h1>
                    <p className='features-section-left-para' >Engage with your supporter and subscriber to sell your skills, knowledge and passions </p>
                    <button type='button' className='features-section-left-button' >Become a creator</button>
                </div>
                <div className='features-section-right' >
                    <div className='features-section-right-1' >
                        <div className='fsr-col-1' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
                                <circle cx="64" cy="64" r="15" stroke="#2B2730" stroke-width="4"/>
                                <circle cx="64" cy="64" r="60" stroke="#2B2730" stroke-width="4"/>
                                <circle cx="63.9922" cy="64" r="35" stroke="#2B2730" stroke-width="4"/>
                            </svg>
                            <h1 className='fsr-head' >Engagement</h1>
                            <p className='fsr-para' >Engage on a deeper level with the fans that matter most</p>
                        </div>
                        <div className='fsr-col-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
                            <rect x="10" y="4" width="46.1538" height="46.1538" rx="8" stroke="#2B2730" stroke-width="4"/>
                            <path d="M70 27.3594H118.462M118.462 27.3594L105.348 40.923M118.462 27.3594L105.348 13.2307" stroke="#2B2730" stroke-width="4"/>
                            <path d="M58.4615 101.206H10M10 101.206L23.1131 114.769M10 101.206L23.1131 87.0769" stroke="#2B2730" stroke-width="4"/>
                            <rect x="72.3077" y="77.8462" width="46.1538" height="46.1538" rx="8" stroke="#2B2730" stroke-width="4"/>
                        </svg>
                            <h1 className='fsr-head' >Autonomy </h1>
                            <p className='fsr-para' >Full autonomy on when and who you talk to.</p>
                        </div>
                   
                    </div>
                    <div className='features-section-right-1' >
                        <div className='fsr-col-1' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
                            <circle cx="64" cy="64" r="13" stroke="#2B2730" stroke-width="4"/>
                            <circle cx="64" cy="64" r="58" stroke="#2B2730" stroke-width="4"/>
                            <path d="M108.669 57.2552C112.816 60.8732 112.816 67.1268 108.669 70.7448C102.77 75.8903 94.664 82.5069 86.4208 87.8258C82.2994 90.4851 78.1818 92.795 74.3177 94.4346C70.4319 96.0835 66.9284 97 64 97C61.0716 97 57.5681 96.0835 53.6823 94.4346C49.8182 92.795 45.7006 90.4851 41.5792 87.8258C33.336 82.5069 25.2303 75.8903 19.3315 70.7448C15.1838 67.1268 15.1838 60.8732 19.3315 57.2552C25.2303 52.1097 33.336 45.4931 41.5792 40.1742C45.7006 37.5149 49.8182 35.205 53.6823 33.5654C57.5681 31.9165 61.0716 31 64 31C66.9284 31 70.4319 31.9165 74.3177 33.5654C78.1818 35.205 82.2994 37.5149 86.4208 40.1742C94.664 45.4931 102.77 52.1097 108.669 57.2552Z" stroke="#2B2730" stroke-width="4"/>
                        </svg>
                            <h1 className='fsr-head' >Free</h1>
                            <p className='fsr-para' >No monthly fee or sign-up fee</p>
                        </div>
                        <div className='fsr-col-2' >
                        <div className="earn-image">
                            
                        </div>
                            <h1 className='fsr-head' >Earn </h1>
                            <p className='fsr-para' >Add a new source of income that you can control</p>
                        </div>
                   
                    </div>
                </div>

            </div>
        )
    }
}
export default Features