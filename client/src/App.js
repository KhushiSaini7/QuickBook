import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import {Helmet} from "react-helmet";
function App() {

  return (
    <div className="app">
    <Helmet>
                <meta charSet="utf-8" />
                <title>QuickBook</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;