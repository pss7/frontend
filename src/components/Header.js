import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header() {

    return (
        <header id="header">
            <div className="container">
                <div className="header">

                    <nav>
                        <ul className="menu">
                            <li>
                                <Link to="section02" smooth={true} duration={700}>
                                    SKILL
                                </Link>
                            </li>
                            <li>
                                <Link to="section03" smooth={true} duration={700}>
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li>
                                <Link to="section04" smooth={true} duration={700}>
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <button className="mobileBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="mobileMenuWrap">

                        <nav className="mobileNav">
                            <ul className="mobileMenu">
                                <li>
                                    <Link to="#">
                                        SKILL
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        PORTFOLIO
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <button className="mobileCloseBtn">
                            <span></span>
                            <span></span>
                        </button>

                    </div>

                    <div className="mobileBg"></div>

                </div>
            </div>
        </header>
    )

}