import { useEffect, useState } from "react";

export default function Visual() {

  const [imgActive, setImgActive] = useState('');
  const [textActive, setTextActive] = useState('');

  useEffect(() => {

    setImgActive('active');
    setTextActive('active');

  })

  return (
    <section id="section01">
      <div className="container">
        <div className="section01">
          <div className="imgWrap">
            <img src={process.env.PUBLIC_URL + '/images/mainimg.jpg'} className={imgActive} alt="" />
          </div>
          <div className="textWrap">
            <h2>
              <span className={'tit01 ' + textActive}> FRONTEND </span>
              <span className={'tit02 ' + textActive}> PORTFOLIO </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )

}