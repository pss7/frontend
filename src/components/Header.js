import { useState } from 'react';
import { Link, scroller } from 'react-scroll';

export default function Header() {

    const [menuToggle, setMobileToggle] = useState('');
    const [mobileMenu, setMobileMenu] = useState('');

    function handleMenuToggle() {

        setMobileMenu('')

        if (menuToggle === '') {
            setMobileToggle('active');
        } else {
            setMobileToggle('');
        }

    }

    function handleMenuClick(section) {

        setMobileMenu(section);

        scroller.scrollTo(section, {
            duration: 900,
            delay: 0,
            smooth: 'easeOut',
            offset: -49
        });
    };

    return (
        <header id="header">
            <div className="container">
                <div className="header">

                    <nav>
                        <ul className="menu">
                            <li>
                                <Link to="section01" onClick={() => handleMenuClick('section01')}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="section02" onClick={() => handleMenuClick('section02')}>
                                    SKILL
                                </Link>
                            </li>
                            <li>
                                <Link to="section03" onClick={() => handleMenuClick('section03')}>
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li>
                                <Link to="section04" onClick={() => handleMenuClick('section04')}>
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
                                    <Link to="section01" className={mobileMenu === 'section01' ? 'active' : ''} onClick={() => {
                                        handleMenuClick('section01');
                                    }}>
                                        <span>HOME</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="section02" className={mobileMenu === 'section02' ? 'active' : ''} onClick={() => {
                                        handleMenuClick('section02');
                                    }}>
                                        <span>SKILL</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="section03" className={mobileMenu === 'section03' ? 'active' : ''} onClick={() => {
                                        handleMenuClick('section03');
                                    }}>
                                        <span>PORTFOLIO</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="section04" className={mobileMenu === 'section04' ? 'active' : ''} onClick={() => {
                                        handleMenuClick('section04');
                                    }}>
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