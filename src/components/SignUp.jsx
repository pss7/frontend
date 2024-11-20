
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const valid = name && email && emailCheck && password && passwordCheck && password === passwordConfirm;

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

    const handleSingup = async function (e) {
        e.preventDefault();

        if (!valid) {
            return;
        }

        try {
            const responce = await fetch(`${process.env.REACT_APP_API}/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                })
            });

            if (responce.status === 201) {
                console.log("회원가입 성공");
                navigate("/signin");
            } else if (responce.status === 400) {
                console.log("회원가입 실패");
            }
        }
        catch (error) {
            console.log("오류:", error);
        }
    }

    return (

        <div className="contentWrap">
            <div className="container">
                <div className="contentBox">

                    <div className="loginWrap">
                        <div className="signupBox">

                            <h1>회원가입</h1>

                            <form onSubmit={handleSingup}>

                                <div className="box">
                                    <label>
                                        이름
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="box">
                                    <label>
                                        이메일
                                    </label>
                                    <input
                                        type="text"
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
                                    <label>
                                        비밀번호
                                    </label>
                                    <input
                                        type="password"
                                        onChange={handlePassword}
                                    />
                                    {
                                        !passwordCheck && password.length > 0 && (
                                            <p className="errorMessage">
                                                비밀번호를 정확하게 입력해주세요.
                                            </p>
                                        )
                                    }

                                </div>

                                <div className="box">
                                    <label>
                                        비밀번호 확인
                                    </label>
                                    <input
                                        type="password"
                                        onChange={(e) => {
                                            setPasswordConfirm(e.target.value);
                                        }}
                                    />
                                    {
                                        password !== passwordConfirm && passwordConfirm.length > 0 && (
                                            <p className="errorMessage">
                                                비밀번호가 일치하지 않습니다.
                                            </p>
                                        )
                                    }

                                </div>

                                <button type="submit" className="btn" disabled={!valid}>
                                    회원가입
                                </button>

                            </form>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}


/*
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");

    const handleSingup = async function (e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const responce = await fetch(`${process.env.REACT_APP_API}/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    role: role,
                })
            });

            // const result = await responce.json();

            if (responce.status === 201) {
                console.log("회원가입 성공");
                navigate("/signin");
            } else if (responce.status === 400) {
                console.log("회원가입 실패");
            }
        }
        catch (error) {
            console.log("오류:", error);
        }
    }

    return (

        <div className="contentWrap">
            <div className="container">
                <div className="contentBox">

                    <div className="loginWrap">

                        <h1>회원가입</h1>


                        <form onSubmit={handleSingup}>

                            <div className="box">
                                <label>
                                    이름
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                />
                            </div>

                            <div className="box">
                                <label>
                                    이메일
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                            </div>

                            <div className="box">
                                <label>
                                    비밀번호
                                </label>
                                <input
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <div className="box">
                                <label>
                                    비밀번호 확인
                                </label>
                                <input
                                    type="password"
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>

                            <div className="box inputRadioWrap">
                                <div className="inputRadioBox">
                                    <input
                                        id="radio01"
                                        name="radio"
                                        type="radio"
                                        checked={
                                            role === "user"
                                        }
                                        onChange={
                                            () => setRole("user")
                                        }
                                    />
                                    <label htmlFor="radio01">
                                        고객
                                    </label>
                                </div>

                                <div className="inputRadioBox">
                                    <input
                                        id="radio02"
                                        name="radio"
                                        type="radio"
                                        checked={
                                            role === "seller"
                                        }
                                        onChange={
                                            () => setRole("seller")
                                        }
                                    />
                                    <label htmlFor="radio02">
                                        판매자
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="btn">
                                회원가입
                            </button>

                        </form>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}
*/