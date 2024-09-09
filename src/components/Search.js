import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {

    const [serach, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = function () {

        if (serach) {
            navigate(`/searchpage/${serach}`);
            setSearch("");
        }

    }

    return (
        <div className="contentWrap searchWrap">
            <div className="container">
                <div className="searchBox">
                    <div className="search">
                        <form>
                            <div className="box">
                                <input
                                    type="search"
                                    placeholder="검색어 입력"
                                    value={serach}
                                    onChange={e => setSearch(e.target.value)}
                                    onKeyDown={e => {
                                        if (e.key == "Enter") {
                                            handleSearch();
                                        }
                                    }}
                                />
                                <button type="submit">
                                    검색
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )

}