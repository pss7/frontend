import { HashRouter, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./assets/css/fonts.css";
import "./assets/css/reset.css";
import "./assets/css/index.css";

import Home from "./components/Home";
import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail";
import BoardUpdate from "./components/BoardUpdate";
import BoardWrite from "./components/BoardWrite";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";
import SignOut from "./components/SignOut";

function App() {

  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {

    const email = localStorage.getItem('email');
    setLoginStatus(!!email);

  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/boardlist' element={<BoardList />} />
        <Route path='/boarddetail/:id' element={<BoardDetail />} />
        <Route path='/boardupdate/:id' element={<BoardUpdate />} />
        <Route path='/boardwrite' element={<BoardWrite />} />
        <Route path='/search' element={<Search />} />
        <Route path='/searchpage/:searchId' element={<SearchPage />} />
        <Route path="/signin" element={loginStatus ? <Navigate to={"/signout"} /> : <SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signout' element={<SignOut />} />
      </Routes>
    </HashRouter >
  );
}

export default App;
