import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarInfo from "./CarInfo";
import Home from "./Home";
import Layout from "./Layout";
import UserInfo from "./UserInfo";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="carinfo" element={<CarInfo /> } />
        <Route path="userinfo" element={<UserInfo />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
