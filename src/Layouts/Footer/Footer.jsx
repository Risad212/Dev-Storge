import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 footer-info">
                            <h3>Dev Stroge</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores qui, eveniet reiciendis nostrum molestias adipisci debitis tenetur esse architecto!</p>
                            <div className="social-icon">
                                <div><i class="fa-brands fa-square-facebook"></i></div>
                                <div><i class="fa-brands fa-instagram"></i></div>
                                <div><i class="fa-brands fa-twitter"></i></div>
                                <div><i class="fa-brands fa-pinterest"></i></div>
                            </div>
                        </div>
                        <div className="col-lg-3 footer-link">
                            <h3>Useful Links</h3>
                             <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/cart'>Cart</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                             </ul>
                        </div>
                        <div className="col-lg-4 footer-location">
                            <h3>Contact</h3>
                            <p><i class="fa-solid fa-location-dot"></i> 622 Dixie, South Tobinchester 98336</p>
                            <p><i class="fa-solid fa-phone"></i> +880 1234 56789</p>
                            <p><i class="fa-solid fa-envelope"></i> contact@dev.stroge</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer