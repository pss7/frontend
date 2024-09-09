
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginCheck, setLoginCheck] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async function (e) {
        e.preventDefault();

        /*
        const responce = await fetch(`http://localhost:3001/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });
        */

        /*
        const responce = await fetch(`http://localhost:3001/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });
        */

        const responce = await fetch("http://localhost:3001/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const result = await responce.json();

        const user = result.find(user => user.email === email && user.password === password);

        if (user) {
            sessionStorage.setItem("email", user.email);
            sessionStorage.setItem("role", user.role);
            console.log("로그인성공");
            navigate("/");
        } else {
            console.log("로그인실패");
            setLoginCheck(true);
        }

        /*
        if (responce.status === 200) {
            sessionStorage.setItem("email", result.email);
            sessionStorage.setItem("role", result.role);
            console.log("로그인성공");
            navigate("/");
        } else {
            console.log("로그인실패");
            setLoginCheck(true);
        }
        */

    }

    return (
        <div className="contentWrap">
            <div className="container">
                <div className="contentBox">

                    <div className="loginWrap">
                        <h1>로그인</h1>

                        <form onSubmit={handleLogin}>

                            <div className="box">
                                <label htmlFor="email">
                                    이메일
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="box">
                                <label htmlFor="password">
                                    비밀번호
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {
                                loginCheck &&
                                <p className="errText">
                                    이메일 혹은 비밀번호가 틀립니다.
                                </p>
                            }

                            <ul className="loginLinkWrap">
                                <li>
                                    <Link to="#">아이디/비밀번호 찾기</Link>
                                </li>
                                <li>
                                    <Link to="/signup">회원가입</Link>
                                </li>
                            </ul>

                            <button type="submit" className="btn">
                                로그인
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}