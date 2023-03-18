import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h2>Welcome to the Service of Car Sales</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CarInfo">CarInfo</Link>
          </li>
          <li>
            <Link to="/UserInfo">UserInfo</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
