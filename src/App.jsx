import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Welcome } from "./sections/Welcome";
import { Soft } from "./sections/Soft";
import { Skilline } from "./sections/Skilline";
import { Classroom } from "./sections/Classroom";
import { Features } from "./sections/Features";
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
      <News />
      <Footer />
    </>
  );
}

export default App;
