import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/css/fonts.css";
import "./assets/css/reset.css";
import "./assets/css/index.css";

import Home from "./components/Home";
import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail";
import BoardUpdate from "./components/BoardUpdate";
import BoardWrite from "./components/BoardWrite";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/boardlist' element={<BoardList />} />
        <Route path='/boarddetail/:id' element={<BoardDetail />} />
        <Route path='/boardupdate/:id' element={<BoardUpdate />} />
        <Route path='/boardwrite' element={<BoardWrite />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
