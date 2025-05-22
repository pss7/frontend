export default function Skill() {
    return (
        <section id="section02">
            <div className="container">
                <div className="section02">
                    <h2 className="title" data-aos="fade-up">
                        <span>
                            SKILL
                        </span>
                    </h2>

                    <ul className="skillList" data-aos="fade-up">
                        <li>
                            <div className="imgWrap">
                                <img src={process.env.PUBLIC_URL + '/images/html.png'} alt="HTML" />
                            </div>
                            <div className="textWrap">
                                <h3>
                                    HTML5
                                </h3>
                                <p>
                                    웹표준·웹 접근성 준수 <br />
                                    크로스브라우징
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="imgWrap">
                                <img src={process.env.PUBLIC_URL + '/images/css.png'} alt="CSS" />
                            </div>
                            <div className="textWrap">
                                <h3>
                                    CSS3
                                </h3>
                                <p>
                                    반응형 웹 <br />
                                    CSS를 사용한 애니메이션 구현
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="imgWrap">
                                <img src={process.env.PUBLIC_URL + '/images/js.png'} alt="JavaScript" />
                            </div>
                            <div className="textWrap">
                                <h3>
                                    JavaScript
                                </h3>
                                <p>
                                    JavaScript를 활용한 기능 구현
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="imgWrap">
                                <img src={process.env.PUBLIC_URL + '/images/ts.png'} alt="TypeScript" />
                            </div>
                            <div className="textWrap">
                                <h3>
                                    TypeScript
                                </h3>
                                <p>
                                    TypeScript
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="imgWrap">
                                <img src={process.env.PUBLIC_URL + '/images/jq.png'} alt="jQuery" />
                            </div>
                            <div className="textWrap">
                                <h3>
                                    jQuery
                                </h3>
                                <p>
                                    jQuery를 활용한 기능 구현
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="imgWrap">
                                <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React" />
                            </div>
                            <div className="textWrap">
                                <h3>
                                    React
                                </h3>
                                <p>
                                    컴포넌트 <br />
                                    데이터 서버통신
                                </p>
                            </div>
                        </li>
                        {/* <li>
                            <div className="imgWrap">
                                <img src={process.env.PUBLIC_URL + '/images/vue.png'} alt="Vue" />
                            </div>
                            <div className="textWrap">
                                <h3>
                                    Vue
                                </h3>
                                <p>
                                    Vue
                                </p>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}