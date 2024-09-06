import { useRef, useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {

    const [menuToggle, setMobileToggle] = useState('');
    const [mobileMenuLink, setmobileMenuLink] = useState('');

    function handleMenuToggle() {

        setmobileMenuLink('')

        if (menuToggle === '') {
            setMobileToggle('active');
        } else {
            setMobileToggle('');
        }

    }

    function handleLinkClick(section) {

        setmobileMenuLink(section);

    }

    return (
        <header id="header">
            <div className="container">
                <div className="header">

                    <nav>
                        <ul className="menu">
                            <li>
                                <Link to="section01" smooth={true} duration={700} >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="section02" smooth={true} duration={700} >
                                    SKILL
                                </Link>
                            </li>
                            <li>
                                <Link to="section03" smooth={true} duration={700} >
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li>
                                <Link to="section04" smooth={true} duration={700} >
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <button className="mobileBtn" onClick={handleMenuToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`mobileMenuWrap ` + menuToggle}>

                        <nav className="mobileNav">
                            <ul className="mobileMenu">
                                <li>
                                    <Link to="section01" className={mobileMenuLink === 'section01' ? 'active' : ''} onClick={() => {
                                        handleLinkClick('section01');
                                    }} smooth={true} duration={700}>
                                        <span>HOME</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="section02" className={mobileMenuLink === 'section02' ? 'active' : ''} onClick={() => {
                                        handleLinkClick('section02');
                                    }} smooth={true} duration={700}>
                                        <span>SKILL</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="section03" className={mobileMenuLink === 'section03' ? 'active' : ''} onClick={() => {
                                        handleLinkClick('section03');
                                    }} smooth={true} duration={700}>
                                        <span>PORTFOLIO</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="section04" className={mobileMenuLink === 'section04' ? 'active' : ''} onClick={() => {
                                        handleLinkClick('section04');
                                    }} smooth={true} duration={700}>
                                        <span>CONTACT</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <button className="mobileCloseBtn" onClick={handleMenuToggle}>
                            <span></span>
                            <span></span>
                        </button>

                    </div>

                    <div className={`mobileBg ` + menuToggle}></div>

                </div>
            </div>
        </header>
    )

}