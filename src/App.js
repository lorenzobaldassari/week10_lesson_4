import "bootstrap/dist/css/bootstrap.min.css";
import "./personal-scss/personal.css";
import Home from "./Components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./Components/TvShows";
import CustomNavbar from "./Components/Home-component/Navbar";
import Footer from "./Components/Home-component/Footer";
import MoviesDetail from "./Components/MovieDetail";
import SearchPage from "./Components/SearcPage";

function App() {
  return (
    <>
   
        <BrowserRouter>
        <CustomNavbar />
          <Routes>
            {/* <Login/> */}
            {/* <Settings/> non e stato fatto e qui per continuarlo io nel week end! */}
            <Route element={<Home />} path="/" />
            <Route element={<TvShows />} path="/TvShows" />
            <Route element={<MoviesDetail/>} path="/MovieDetail/:id"/>
            <Route element={<SearchPage/>} path="/SearchPage/:name"/>

          </Routes>
        <Footer/>
        </BrowserRouter>
    
    </>
  );
}

export default App;
