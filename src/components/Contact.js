import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function Contact() {

  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    if (nameRef.current.value.length === 0 && emailRef.current.value.length === 0 && contentRef.current.value.length === 0) {
      alert("빈 칸을 입력해주세요.");
      return false;
    }
    if (nameRef.current.value.length === 0) {
      alert("이름을 입력해주세요")
      return false;
    }
    if (emailRef.current.value.length === 0) {
      alert("이메일을 입력해주세요")
      return false;
    }
    if (contentRef.current.value.length === 0) {
      alert("내용을 입력해주세요")
      return false;
    }

    fetch(`${process.env.REACT_APP_API}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        content: contentRef.current.value
      })
    }).then(res => {
      if (res.ok) {
        alert("등록완료");
        navigate("/");
      }
    })

  }

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
                  <input id="name" type="text" placeholder="이름" ref={nameRef} />
                </div>
              </div>

              <div className="box">
                <div className="inputTextBox">
                  <label className="blind" htmlFor="email">
                    이메일
                  </label>
                  <input id="email" type="text" placeholder="이메일" ref={emailRef} />
                </div>
              </div>

              <div className="box">
                <div className="textareaBox">
                  <label className="blind" htmlFor="content">
                    내용
                  </label>
                  <textarea id="content" placeholder="내용" ref={contentRef}>
                  </textarea>
                </div>
              </div>

              <input type="submit" value="문의하기" className="submit" onClick={onSubmit} />

            </form>
          </div>

        </div>
      </div>
    </section>
  )

}
