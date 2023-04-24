import "./App.css";
import NavBar from "./commponents/NavBar";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
//import Login from "./components/Login";
import CreatePost from "./pages/CreatePostPage.js";
import Blogs from "./pages/Blogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
  return (
    <Auth0Provider
      domain="dev-7ougw7dd26p4l8i3.us.auth0.com"
      clientId="xyPaWIk3l8Gs8zfeK4jpEtZsYobrKR1j"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/writeblog" element={<CreatePost />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
