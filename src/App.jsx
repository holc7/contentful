import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main/Main";
import "./App.css";
import Header from "./Header/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./Footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header />
      {/* <HamburgerMenu
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
      />{" "} */}
      <Main isMenuOpen={isMenuOpen} />
      <Footer />
    </>
  );
}

export default App;
