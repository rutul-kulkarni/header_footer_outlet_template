import { Outlet } from "react-router-dom";

const Body = () => (
  <div className="child content">
    <Outlet />
  </div>
);

export default Body;
