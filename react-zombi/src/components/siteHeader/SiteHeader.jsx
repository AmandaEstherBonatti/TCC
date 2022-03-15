import '../../css/_utils.css'
import "primeicons/primeicons.css";
import { Button } from 'primereact/button';
import './_siteHeader.css'
import React, { Component } from 'react'

class SiteHeader extends React.Component {
    render() {
        return (
            <div className='header-section'>
                <div className='header-division-left '>
                    <div className='header-division-left-content header-size'>
                        <div className='left-content-phone'>
                            <i className="pi pi-phone"></i><span className="ml-1">+992 563 542</span>
                        </div>
                        <div className='left-content-email'>
                            <i className="pi pi-envelope"></i><span className="ml-1">info@mail.com</span>
                        </div>
                    </div>
                </div>
                <div className='header-division-right'>
                    <div className='header-division-right-content header-size'>
                        <div className='right-content-user'>
                            <Button 
                                label="Register"
                                className="header-user-button"
                            />
                            <Button 
                                label="Log in"
                                className="header-user-button"
                            />
                        </div>
                        <div className='right-content-social_links'>
                            <i className="pi pi-discord"/>
                            <i className="pi pi-twitter"/>
                            <i className="pi pi-github"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SiteHeader