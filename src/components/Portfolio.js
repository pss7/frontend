import { Link } from "react-router-dom";

export default function Portfolio() {

    return (
      <section id="section03">
        <div className="portfolioTop">
          <video src="videos/video.mp4" autoPlay loop muted playsInline>
          </video>
          <div className="textWrap" >
            <p className="text01" data-aos="fade-up">Create only high-quality homepages</p>
            <p className="text02" data-aos="fade-up">
              고퀄리티의 홈페이지만을 만듭니다.
            </p>
          </div>
        </div>
        <div className="section03">
          <div className="container">
            <h2 className="title" data-aos="fade-up">
              <span>
                PORTFOLIO
              </span>
            </h2>
            <ul className="portfolioList" data-aos="fade-up">
              <li>
                <Link to="/boardlist" target="_blank">
                  <div className="imgWrap">
                    <img src="/images/mainimg.jpg" />
                  </div>
                  <div className="textWrap">
                    <h3>
                      게시판
                    </h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="imgWrap">
                    <img src="/images/mainimg.jpg" />
                  </div>
                  <div className="textWrap">
                    <h3>
                      검색
                    </h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="imgWrap">
                    <img src="/images/mainimg.jpg" />
                  </div>
                  <div className="textWrap">
                    <h3>
                      쇼핑몰
                    </h3>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="textEffect textEffect01" >
              <p> FRONTENDPORTFOLIO </p>
              <p> FRONTENDPORTFOLIO </p>
              <p> FRONTENDPORTFOLIO </p>
            </div>
            <div className="textEffect textEffect02" >
              <p> FRONTENDPORTFOLIO </p>
              <p> FRONTENDPORTFOLIO </p>
              <p> FRONTENDPORTFOLIO </p>
            </div>
          </div>
        </div>
      </section>
    )
  }