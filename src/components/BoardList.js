import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import Pagination from "./Pagination";

export default function BoardList() {

    const [boardList, setBoardList] = useState([]);
    const [limit] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/board`)
            .then(res =>
                res.json()
            )
            .then(result =>
                setBoardList(result)
            );
    }, [])

    return (
        <>

            <div className="contentWrap">
                <div className="container">

                    <h1>
                        게시판 목록
                    </h1>

                    <div className="boardWrap boardListWrap">
                        <table className="boardList">
                            <colgroup>
                                <col Style="width: 70px;"></col>
                                <col></col>
                                <col Style="width: 150px;"></col>
                                <col Style="width: 150px;"></col>
                                <col Style="width: 150px;"></col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                    <th>조회</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    boardList.slice(offset, offset + limit).map(data => (
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td className="textLeft">
                                                <Link to={`/boarddetail/${data.id}`}>
                                                    {data.title}
                                                </Link>
                                            </td>
                                            <td>{data.writer}</td>
                                            <td>{new Date(data.date).toLocaleDateString()}</td>
                                            <td>{data.viewCount}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>

                    {/* <Pagination
                    total={boardList.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                /> */}

                    <Link to="/boardwrite" className="btn">
                        등록
                    </Link>

                </div>
            </div>

            <Footer />

        </>
    );

};