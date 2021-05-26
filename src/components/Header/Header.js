import React from 'react';
import './Header.css'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid" style={{margin: '10px'}} >
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="asd"style={{float:'right'}} >
                <ul class="navbar-nav " id="nav-ul" >
                    <li class="nav-item" >
                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">RESOURCES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TEAM</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FEATURES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">COMMUNITY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">DOWNLOADS</a>
                    </li>
                    <li class="nav-item dropdown">
                        <button className="contact-us">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CONTACT US
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown">
                                <li><a class="dropdown-item" href="tel:+996555444444">+996 555 444 444</a></li>
                                <li><a class="dropdown-item" href="tel:+996773333333">+996 773 333 333</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="tel:+996555434434">
                                        <WhatsAppIcon style={{color: 'green'}}/> Whats App
                                    </a>
                                </li>
                            </ul>
                        </button>
                    </li>
                </ul>
                {/* <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;