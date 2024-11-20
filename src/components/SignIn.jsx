
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(false);
    const valid = email && emailCheck && password && passwordCheck;

    const handelEmail = function (e) {
        const email = e.target.value;
        setEmail(email);

        const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        setEmailCheck(regex.test(email));
    }

    const handlePassword = function (e) {
        const password = e.target.value;
        setPassword(password);

        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        setPasswordCheck(regex.test(password));
    }

    const handleLogin = async function (e) {
        e.preventDefault();

        if (!valid) {
            return;
        }

        const responce = await fetch(`${process.env.REACT_APP_API}/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const result = await responce.json();

        const user = result.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem("email", user.email);
            console.log("로그인성공");
            navigate("/");
        } else {
            console.log("로그인실패");
        }

    }

    return (
        <div className="contentWrap">
            <div className="container">
                <div className="contentBox">

                    <div className="loginWrap">
                        <div className="signinBox">
                            <h1>로그인</h1>

                            <form onSubmit={handleLogin}>

                                <div className="box">
                                    <label htmlFor="email">
                                        이메일
                                    </label>
                                    <input
                                        id="email"
                                        type="text"
                                        value={email}
                                        onChange={handelEmail}
                                    />

                                    {
                                        !emailCheck && email.length > 0 && (
                                            <p className="errorMessage">
                                                올바른 이메일 형식이 아닙니다.
                                            </p>
                                        )
                                    }
                                </div>

                                <div className="box">
                                    <label htmlFor="password">
                                        비밀번호
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                    {/* {
                                    password && password.length === 0 && (
                                        <p className="errorMessage">
                                            비밀빈호를 입력해주세요.
                                        </p>
                                    )
                                } */}
                                    {
                                        !passwordCheck && password.length > 0 && (
                                            <p className="errorMessage">
                                                비밀번호를 정확하게 입력해주세요.
                                            </p>
                                        )
                                    }
                                </div>
                                <ul className="loginLinkWrap">
                                    <li>
                                        <Link to="#">아이디/비밀번호 찾기</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup">회원가입</Link>
                                    </li>
                                </ul>

                                <button type="submit" className="btn" disabled={!valid}>
                                    로그인
                                </button>

                            </form>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}