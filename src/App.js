import "./App.css";
import HeaderNotif from "./HeaderNotif";
import Header from "./Header";
import Home from "./Home";
import Collection from "./Collection";
import Bracelets from "./Bracelets";
import Gallery from "./Gallery";
import Footer from "./Footer";


export default function App() {
  return (
    <div>
      <HeaderNotif />
      <Header />
      <Home />
      <Collection />
      <Bracelets />
      <Gallery />
      <Footer />
    </div>
  );
}
