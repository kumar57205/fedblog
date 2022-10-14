import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar-section">
            <div className="sidebar-subsection">
                <span className="sidebar-title">HTML5 FEATURES</span>
                <img className="sidebar-img" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=''/>
            </div>
            <div className="sidebar-subsection">
                <span className="sidebar-title">Table Of Contents</span>
                <ul className="sidebar-categories">
                <li className="sidebar-category"><a href="#feature-1">Video and Audio Features</a></li> 
                <li className="sidebar-category"><a href="#feature-2">Header and Footer</a></li>
                <li className="sidebar-category"><a href="#feature-3">Input tag kinds have been expanded.</a></li>
                <li className="sidebar-category"><a href="#feature-4"> Figure and figcaption</a>  </li>
                <li className="sidebar-category"><a href="#feature-5">Placeholders </a>  </li>
                <li className="sidebar-category"><a href="#feature-6">Preload Videos</a>  </li>
                <li className="sidebar-category"><a href="#feature-7"> Controlling the display</a>  </li>
                <li className="sidebar-category"><a href="#feature-8"> Regular Expressions</a>  </li> 
                <li className="sidebar-category"><a href="#feature-9">  Adaptability</a>  </li>
                <li className="sidebar-category"><a href="#feature-10">  Elements that appear inline</a>  </li>
                <li className="sidebar-category"><a href="#feature-11">  Support for Dynamic Pages</a>  </li>
                <li className="sidebar-category"><a href="#feature-12"> Email as a property</a>  </li>
                <li className="sidebar-category"><a href="#feature-13"> Cryptographic Nonces</a>  </li>
                <li className="sidebar-category"><a href="#feature-14">  Reverse Links </a>  </li>
                <li className="sidebar-category"> <a href="#feature-15">Images with a width of zero</a>  </li>
                <li className="sidebar-category"><a href="#feature-16">Canvas in HTML5 </a>  </li>                   
                </ul>
            </div>
            <div className="sidebar-subsection">
                <span className="sidebar-title" style={{marginRight:"20px"}}>follow us</span>
                <div className="sidebar-social-icons">
                    <i className="sidebar-social-icon fab fa-instagram" style={{color:"#DD2A7B"}}></i>
                    <i className="sidebar-social-icon fab fa-facebook"></i>
                    <i className="sidebar-social-icon fab fa-linkedin"></i>
                    <i className="sidebar-social-icon fab fa-twitter"></i>
                </div>
            </div>
            <div className='scrolltop'><a href="#"><button>Scroll to Top</button></a></div>
        </div>
    )
}

export default Sidebar
