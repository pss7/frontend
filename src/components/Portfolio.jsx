import { Link } from "react-router-dom";

export default function Portfolio() {

  return (
    <section id="section03">
      <div className="portfolioTop">
        <video src={process.env.PUBLIC_URL + '/videos/video.mp4'} autoPlay loop muted playsInline>
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
              <Link to="https://rolling-three.vercel.app/" target="_blank">
                <div className="imgBox">
                  <img src={process.env.PUBLIC_URL + '/images/img01.jpg'} alt="" />
                </div>
                <div className="textWrap">
                  <h3>
                    코드잇 프로젝트 - 롤링
                  </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="https://the-julge-team6.vercel.app/" target="_blank">
                <div className="imgBox">
                  <img src={process.env.PUBLIC_URL + '/images/img02.jpg'} alt="" />
                </div>
                <div className="textWrap">
                  <h3>
                    코드잇 프로젝트 - 더 줄게
                  </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="https://dailyepigram.vercel.app/" target="_blank">
                <div className="imgBox">
                  <img src={process.env.PUBLIC_URL + '/images/img03.jpg'} alt="" />
                </div>
                <div className="textWrap">
                  <h3>
                    코드잇 프로젝트 - 에피그램
                  </h3>
                </div>
              </Link>
            </li>
            {/* <li>
              <Link to="/boardlist" target="_blank">
                <div className="imgBox">
                  <img src={process.env.PUBLIC_URL + '/images/mainimg.jpg'} alt="" />
                </div>
                <div className="textWrap">
                  <h3>
                    게시판
                  </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/search" target="_blank">
                <div className="imgBox">
                  <img src={process.env.PUBLIC_URL + '/images/mainimg.jpg'} alt="" />
                </div>
                <div className="textWrap">
                  <h3>
                    검색
                  </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/signin" target="_blank">
                <div className="imgBox">
                  <img src={process.env.PUBLIC_URL + '/images/mainimg.jpg'} alt="" />
                </div>
                <div className="textWrap">
                  <h3>
                    회원가입, 로그인, 로그아웃
                  </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank">
                <div className="imgBox">
                  <img src={process.env.PUBLIC_URL + '/images/mainimg.jpg'} alt="" />
                </div>
                <div className="textWrap">
                  <h3>
                    쇼핑몰
                  </h3>
                </div>
              </Link>
            </li> */}
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