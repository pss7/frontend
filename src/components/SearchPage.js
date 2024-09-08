import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SearchPage() {

    const { searchId } = useParams();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_API}/portfolio?title=${searchId}`)
            .then(res => res.json())
            .then(result => setSearchData(result))
            .catch(error => console.log("error:", error));

    }, [searchId]);

    return (
        <div className="contentWrap">
            <div className="container">
                <div className="searchResultWrap">
                    <h1>
                        검색결과 <span>{searchData.length}</span>건
                    </h1>
                    {
                        searchData.length > 0 ? (
                            <ul>
                                {
                                    searchData.map(data => (
                                        <li key={data.id}>
                                            <div className="imgBox">
                                                <img src={process.env.PUBLIC_URL + `/images/` + data.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h2>
                                                    {data.title}
                                                </h2>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        ) : (
                            <p className="noData">검색결과가 없습니다.</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}