import {Component } from "react"  
import './index.css'

class Navbar extends Component{
    render(){
        return(
            <nav className='navbar-container' >
                <div className="menu-left" >
                    <a href="#homeSection" className="nav-btn" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="32" viewBox="0 0 97 32" fill="none">
                            <path d="M16.1676 10.608L7.76759 30.36H3.35159L6.42359 23.544L0.975586 10.608H5.55959L8.65559 18.984L11.7276 10.608H16.1676Z" fill="#2B2730"/>
                            <path d="M23.7476 24.192C22.4356 24.192 21.2516 23.912 20.1956 23.352C19.1556 22.792 18.3316 21.992 17.7236 20.952C17.1316 19.912 16.8356 18.696 16.8356 17.304C16.8356 15.928 17.1396 14.72 17.7476 13.68C18.3556 12.624 19.1876 11.816 20.2436 11.256C21.2996 10.696 22.4836 10.416 23.7956 10.416C25.1076 10.416 26.2916 10.696 27.3476 11.256C28.4036 11.816 29.2356 12.624 29.8436 13.68C30.4516 14.72 30.7556 15.928 30.7556 17.304C30.7556 18.68 30.4436 19.896 29.8196 20.952C29.2116 21.992 28.3716 22.792 27.2996 23.352C26.2436 23.912 25.0596 24.192 23.7476 24.192ZM23.7476 20.64C24.5316 20.64 25.1956 20.352 25.7396 19.776C26.2996 19.2 26.5796 18.376 26.5796 17.304C26.5796 16.232 26.3076 15.408 25.7636 14.832C25.2356 14.256 24.5796 13.968 23.7956 13.968C22.9956 13.968 22.3316 14.256 21.8036 14.832C21.2756 15.392 21.0116 16.216 21.0116 17.304C21.0116 18.376 21.2676 19.2 21.7796 19.776C22.3076 20.352 22.9636 20.64 23.7476 20.64Z" fill="#2B2730"/>
                            <path d="M32.1169 17.28C32.1169 15.904 32.3729 14.696 32.8849 13.656C33.4129 12.616 34.1249 11.816 35.0209 11.256C35.9169 10.696 36.9169 10.416 38.0209 10.416C38.9009 10.416 39.7009 10.6 40.4209 10.968C41.1569 11.336 41.7329 11.832 42.1489 12.456V6.23999H46.2529V24H42.1489V22.08C41.7649 22.72 41.2129 23.232 40.4929 23.616C39.7889 24 38.9649 24.192 38.0209 24.192C36.9169 24.192 35.9169 23.912 35.0209 23.352C34.1249 22.776 33.4129 21.968 32.8849 20.928C32.3729 19.872 32.1169 18.656 32.1169 17.28ZM42.1489 17.304C42.1489 16.28 41.8609 15.472 41.2849 14.88C40.7249 14.288 40.0369 13.992 39.2209 13.992C38.4049 13.992 37.7089 14.288 37.1329 14.88C36.5729 15.456 36.2929 16.256 36.2929 17.28C36.2929 18.304 36.5729 19.12 37.1329 19.728C37.7089 20.32 38.4049 20.616 39.2209 20.616C40.0369 20.616 40.7249 20.32 41.2849 19.728C41.8609 19.136 42.1489 18.328 42.1489 17.304Z" fill="#2B2730"/>
                            <path d="M55.318 24.192C54.006 24.192 52.822 23.912 51.766 23.352C50.726 22.792 49.902 21.992 49.294 20.952C48.702 19.912 48.406 18.696 48.406 17.304C48.406 15.928 48.71 14.72 49.318 13.68C49.926 12.624 50.758 11.816 51.814 11.256C52.87 10.696 54.054 10.416 55.366 10.416C56.678 10.416 57.862 10.696 58.918 11.256C59.974 11.816 60.806 12.624 61.414 13.68C62.022 14.72 62.326 15.928 62.326 17.304C62.326 18.68 62.014 19.896 61.39 20.952C60.782 21.992 59.942 22.792 58.87 23.352C57.814 23.912 56.63 24.192 55.318 24.192ZM55.318 20.64C56.102 20.64 56.766 20.352 57.31 19.776C57.87 19.2 58.15 18.376 58.15 17.304C58.15 16.232 57.878 15.408 57.334 14.832C56.806 14.256 56.15 13.968 55.366 13.968C54.566 13.968 53.902 14.256 53.374 14.832C52.846 15.392 52.582 16.216 52.582 17.304C52.582 18.376 52.838 19.2 53.35 19.776C53.878 20.352 54.534 20.64 55.318 20.64Z" fill="#2B2730"/>
                            <path d="M68.6072 12.84C69.0872 12.104 69.6872 11.528 70.4072 11.112C71.1272 10.68 71.9272 10.464 72.8072 10.464V14.808H71.6792C70.6552 14.808 69.8872 15.032 69.3752 15.48C68.8632 15.912 68.6072 16.68 68.6072 17.784V24H64.5032V10.608H68.6072V12.84Z" fill="#2B2730"/>
                            <path d="M73.9528 17.28C73.9528 15.904 74.2088 14.696 74.7208 13.656C75.2488 12.616 75.9608 11.816 76.8568 11.256C77.7528 10.696 78.7528 10.416 79.8568 10.416C80.8008 10.416 81.6248 10.608 82.3288 10.992C83.0488 11.376 83.6008 11.88 83.9848 12.504V10.608H88.0888V24H83.9848V22.104C83.5848 22.728 83.0248 23.232 82.3048 23.616C81.6008 24 80.7768 24.192 79.8328 24.192C78.7448 24.192 77.7528 23.912 76.8568 23.352C75.9608 22.776 75.2488 21.968 74.7208 20.928C74.2088 19.872 73.9528 18.656 73.9528 17.28ZM83.9848 17.304C83.9848 16.28 83.6968 15.472 83.1208 14.88C82.5608 14.288 81.8728 13.992 81.0568 13.992C80.2408 13.992 79.5448 14.288 78.9688 14.88C78.4088 15.456 78.1288 16.256 78.1288 17.28C78.1288 18.304 78.4088 19.12 78.9688 19.728C79.5448 20.32 80.2408 20.616 81.0568 20.616C81.8728 20.616 82.5608 20.32 83.1208 19.728C83.6968 19.136 83.9848 18.328 83.9848 17.304Z" fill="#2B2730"/>
                            <circle cx="92" cy="22.5" r="2" fill="#FFB84C"/>
                        </svg>
                    </a>
                    <div className="menu-links" >
                        <button type="button" className="nav-btn" >
                            Explore
                        </button>
                        <button type="button" className="nav-btn" >
                            Company
                        </button>
                        <a href="#footerSection" className="nav-btn" >Support</a>
                    </div>
                </div>
                <div className="menu-right" >
                    <p className="nav-text" >Become a member</p>
                    <button type="button" className="nav-signin-btn" >
                        Sign in
                    </button>
                </div>
            </nav>
        )
    }
}
export default Navbar