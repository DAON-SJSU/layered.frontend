import { Outlet, useLocation } from "react-router-dom";
import * as _ from "./style";
import HeaderBar from "../components/headerBar";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isPlaylistPage = location.pathname === "/playlist";

  return (
    <_.Mobile>
      <_.Void />
      {!isHomePage && !isPlaylistPage && <HeaderBar text={"Music Style"} />}
      <_.MainBody>
        <Outlet />
      </_.MainBody>
    </_.Mobile>
  );
};

export default Layout;
