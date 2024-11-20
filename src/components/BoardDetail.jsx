import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

export default function BoardDetail() {

    const navigate = useNavigate()

    const { id } = useParams();
    const [boardDetail, setBoardDetail] = useState([]);

    useEffect(() => {
        const boardDetailView = async () => {
            try {

                const response = await fetch(`${process.env.REACT_APP_API}/board/${id}`);
                const board = await response.json();

                setBoardDetail(board)


                await fetch(`${process.env.REACT_APP_API}/board/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ viewCount: board.viewCount + 1 })
                });

                const updateResponse = await fetch(`${process.env.REACT_APP_API}/board/${id}`);
                const updatePost = await updateResponse.json();
                setBoardDetail(updatePost)

            } catch (error) {
                console.log(error);
            }
        };

        boardDetailView();

    }, [id])

    function del() {
        if (window.confirm("삭제 하시겠습니까?")) {
            fetch(`${process.env.REACT_APP_API}/board/${id}`, {
                method: "DELETE",
            }).then(res => {
                if (res.ok) {
                    alert("삭제 되었습니다.");
                    navigate("/boardlist");
                }
            })
        };
    };

    if (boardDetail.id === 0) {
        return null;
    }

    return (
        <>

            <div className="contentWrap">
                <div className="container">
                    <h1>
                        게시판 상세
                    </h1>
                    <div className="boardWrap boardDetailWrap">
                        <div className="boardDetailBox">
                            <div className="boardDetailTop">
                                <h2>
                                    {boardDetail.title}
                                </h2>
                                <span>
                                    {new Date(boardDetail.date).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="boardDetailContent">
                                <p>
                                    {boardDetail.content}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="btnBox">
                        <Link className="btn" to={`/boardUpdate/${boardDetail.id}`}>
                            수정
                        </Link>
                        <button className="btn" onClick={del}>
                            삭제
                        </button>
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