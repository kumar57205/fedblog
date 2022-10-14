import React from 'react';
import './TopBar.css';


//React component returns JSX kind on markup
function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <i className="topbar-social-icon fab fa-instagram" id="insta"></i>
                <i className="topbar-social-icon fab fa-facebook"></i>
                <i className="topbar-social-icon fab fa-linkedin"></i>
                <i className="topbar-social-icon fab fa-twitter"></i>
            </div>
            <div className="topbar-center">
                <ul className="topbar-list">
                    <li className="topbar-list-item" >
                        HOME
                    </li>
                    <li className="topbar-list-item">ABOUT</li>
                    <li className="topbar-list-item">CONTACT</li>
                    <li className="topbar-list-item">HELP</li>
                    <li className="topbar-list-item">LOGOUT</li>
                </ul>
            </div>
            <div className="topbar-right">
                <img className="topbar-profile-pic" alt="" src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <i className="topbar-search fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
