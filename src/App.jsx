import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Welcome } from "./sections/Welcome";
import { Soft } from "./sections/Soft";
import { Classroom } from "./sections/Classroom";
import { Skilline } from "./sections/Skilline";
import { Features } from "./sections/Features";
import { Say } from "./sections/Say";
import { News } from "./sections/News";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Welcome />
      <Soft />
      <Skilline />
      <Classroom />
      <Features />
      <Say />
      <News />
      <Footer />
    </>
  );
}

export default App;
