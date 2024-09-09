import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nickName, setNickName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const handleSingup = async function (e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const responce = await fetch("http://localhost:3001/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    nickName: nickName,
                    phoneNumber: phoneNumber,
                    password: password,
                    role: role,
                })
            });

            const result = await responce.json();

            if (responce.status === 201) {
                console.log("회원가입 성공");
                navigate("/signin");
            } else if (responce === 400) {
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
                                    사용자명
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
                                    전화번호
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
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

                            <div className="box">
                                <label>
                                    닉네임
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setNickName(e.target.value)
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

                        {/* <p>
                            이미 회원이신가요?
                            <Link to="/signin">
                                로그인
                            </Link>
                        </p> */}

                    </div>
                </div>
            </div>
        </div>

    );
}