import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <h1>Main Layout</h1>
      <hr />
      <div className="main-layout__content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
