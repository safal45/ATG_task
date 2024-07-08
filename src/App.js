
import "./App.css";
import Addnew from "./components/addnew/Addnew";
import Home from "./components/body/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Page from "./components/page2/Page";
import Page3 from "./components/page3/Page3";
import Page4 from "./components/page4/Page4";
import Page5 from "./components/page5/Page5";

function App() {
  return (
    <div className="bg-[#F7F5F9] w-[100%]">
      <Header />
      <Home />
      <Page />
      <Page3/>
      <Page4 />
      <Page5 />
      <Footer/>
    </div>
  );
}

export default App;
