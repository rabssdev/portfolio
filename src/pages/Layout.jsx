import { Outlet, Link } from "react-router-dom";
import App from "../App";
import Content from "./Content";

const Layout = () => {
  return (
    <>
      <nav className="bg-green-300">
        <ul>
          <li>
            <Link to="/">Homes</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Content />
    </>
  )
};

export default Layout;