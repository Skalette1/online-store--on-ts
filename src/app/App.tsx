// import './App.css'
import { Home } from "../pages/ui/Home";
import { Donate } from "../widget/donate/Donate";
import { Footer } from "../widget/footer/ui/Footer";
import { Header } from "../widget/header/Header";

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
