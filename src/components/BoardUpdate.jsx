import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

export default function BoardUpdate() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [board, setBoard] = useState({ id: 0, title: '', content: '' });
    console.log(board)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/board/${id}`)
            .then(res => res.json())
            .then(result => setBoard(result))

    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBoard(board => ({
            ...board,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API}/board/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(board),
        }).then(res => {
            if (res.ok) {
                alert("등록완료");
                navigate("/boardlist");
            } else {
                alert("오류 발생");
            }
        });
    };

    const cancellation = () => {
        navigate('/boardDetail/' + id);
    }

    return (
        <>

            <div className="contentWrap">
                <div className="container">
                    <h1>
                        게시판 수정
                    </h1>

                    <div className="boardWrap boardUpdateWrap">
                        <form onSubmit={handleSubmit}>

                            <div className="boardBox">
                                <label htmlFor="title">
                                    제목
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={board.title}
                                    placeholder="제목"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="boardBox">
                                <label htmlFor="title">
                                    내용
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    name="content"
                                    value={board.content}
                                    placeholder="내용"
                                    onChange={handleChange}
                                />
                            </div>

                        </form>

                    </div>

                    <div className="btnBox">
                        <button className="btn" onClick={handleSubmit}>수정</button>
                        <button className="btn" onClick={cancellation}>취소</button>
                    </div>

                </div>
            </div>

            <Footer />

        </>

    );

};