
import { Link } from "react-router-dom";

export default function SignOut() {

    function handleSignout() {
        localStorage.removeItem('email');
    }

    return (
        <div className="contentWrap">
            <div className="container">
                <div className="contentBox">

                    <div className="loginWrap">
                        <div className="signoutBox">
                            <h1>로그인 상태</h1>
                            <Link to="/" onClick={handleSignout}>로그아웃</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}