import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function BoardWrite() {

    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault();

        if (titleRef.current.value.length === 0 && contentRef.current.value.length === 0 && writerRef.current.value.length === 0) {
            alert("빈 칸을 입력해주세요.");
            return false;
        }
        if (titleRef.current.value.length === 0) {
            alert("제목을 입력해주세요");
            return false;
        }
        if (contentRef.current.value.length === 0) {
            alert("내용을 입력해주세요");
            return false;
        }
        if (writerRef.current.value.length === 0) {
            alert("작성자를 입력해주세요")
            return false;
        }

        fetch("http://localhost:3001/board", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleRef.current.value,
                content: contentRef.current.value,
                date: new Date().toLocaleDateString(),
                viewCount: 0,
                writer: writerRef.current.value
            }),
        }).then(res => {
            if (res.ok) {
                alert("등록완료");
                navigate("/");
            };
        });
    };

    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const writerRef = useRef(null);

    return (
        <>

            <div className="contentWrap">
                <div className="container">

                    <h1>
                        게시판 등록
                    </h1>

                    <div className="boardWrap boardWriteWrap">
                        <form onSubmit={onSubmit}>

                            <div className="boardBox">
                                <label htmlFor="writer">
                                    작성자
                                </label>
                                <input id="writer" type="text" ref={writerRef} />
                            </div>
                            <div className="boardBox">
                                <label htmlFor="title">
                                    제목
                                </label>
                                <input id="title" type="text" ref={titleRef} />
                            </div>

                            <div className="boardBox">
                                <label htmlFor="content">
                                    내용
                                </label>
                                <input id="content" type="text" ref={contentRef} />
                            </div>

                        </form>

                    </div>

                    <div className="btnBox">
                        <button className="btn">저장</button>
                        <Link className="btn" to="/boardlist">
                            목록
                        </Link>
                    </div>

                </div>
            </div>

            <Footer />

        </>
    );
};