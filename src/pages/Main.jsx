import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Topbar } from "../components";
import useMediaQuery from "../shared/hooks/useMediaQuery";

export default function Main() {
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");
  return (
    <div>
      {isSmallScreen ? (
        <>
          <Navbar />
          <div className="p-3 w-full ">
            <Outlet />
          </div>
        </>
      ) : (
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Topbar />
            <div className="p-3 w-full ">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
