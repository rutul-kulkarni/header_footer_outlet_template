import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const MainLayout = () => {
  return (
    <div className="parent">
      <Header />

      <div className="main">
        <LeftSideBar />
        <Body />
        <RightSideBar />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
