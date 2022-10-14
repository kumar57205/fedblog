import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div > <footer>
    <div class="footer-content">
        <h1 style={{marginBottom:"10px"}}>Details</h1>
        <h4>Name&nbsp;:&nbsp;A.Naga Sai Ajay Kumar</h4>
        <h4 style={{marginLeft:"-90px"}}>Rollno&nbsp;:&nbsp;20BQ1A0501</h4>
        <h4 >Assignment topic&nbsp;:&nbsp;HTML5 Features</h4>
        
        <ul class="socials">
        <i className="footer-social-icon fab fa-instagram" id="insta"></i>
                <i className="footer-social-icon fab fa-facebook"></i>
                <i className="footer-social-icon fab fa-linkedin"></i>
                <i className="footer-social-icon fab fa-twitter"></i>
        </ul>
    </div>
    <div class="footer-bottom">
        <p><span style={{color:"white",textTransform:"lowercase"}}>copyright</span> &copy; <a href="#">Blog</a>  </p>
                <div class="footer-menu">
                  <ul class="f-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Blog</a></li>
                  </ul>
                </div>
    </div>

</footer></div>
  )
}

export default Footer;