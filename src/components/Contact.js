export default function Contact() {

    return (
      <section id="section04">
        <div className="contactWrap">
          <div className="InfoWrap">
            <h2 className="title" data-aos="fade-up">
              <span>
                CONTACT
              </span>
            </h2>
            <h3 data-aos="fade-up">
              INFO
            </h3>
  
            <div className="infoText" data-aos="fade-up">
              <p>010-8507-2702</p>
              <p>p_ss@kakao.com</p>
              <p>강원도 춘천시</p>
            </div>
  
          </div>
  
          <div className="inquiryWrap">
  
            <div className="inquiryBox" data-aos="fade-up">
              <form>
                <div className="box">
                  <div className="inputTextBox">
                    <label className="blind" htmlFor="name">
                      이름
                    </label>
                    <input id="name" type="text" placeholder="이름" />
                  </div>
                </div>
  
                <div className="box">
                  <div className="inputTextBox">
                    <label className="blind" htmlFor="email">
                      이메일
                    </label>
                    <input id="email" type="text" placeholder="이메일" />
                  </div>
                </div>
  
                <div className="box">
                  <div className="textareaBox">
                    <label className="blind" htmlFor="content">
                      내용
                    </label>
                    <textarea id="content" placeholder="내용">
                    </textarea>
                  </div>
                </div>
  
                <input type="submit" value="문의하기" className="submit" />
  
              </form>
            </div>
  
          </div>
        </div>
      </section>
    )
  
  }
  