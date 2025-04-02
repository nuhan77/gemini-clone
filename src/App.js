import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import threeDotSvg from "./assets/three-line-svgrepo-com.svg";
import { Context } from "./conetexts/Context";
import { useContext } from "react";

function App() {
  const { setifsidebar } = useContext(Context);

  return (
    <div className="App">
      <div
        className="threedot"
        onClick={() => {
          setifsidebar((prev) => !prev);
        }}
      >
        <img src={threeDotSvg} />
      </div>

      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
