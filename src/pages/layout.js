import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <h2 id="logo">Probably Cards</h2>
    
        <nav>
            <Link to="/">
                <div className="nav_links">
                    Home
                </div>
            </Link>
            <Link to="/settings">
                <div className="nav_links last_link">
                    Settings
                </div>
            </Link>
        </nav>

      <Outlet />
    </>
  )
};

export default Layout;