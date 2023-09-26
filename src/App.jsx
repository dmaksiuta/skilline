<<<<<<< HEAD
import { Welcome } from "./components/Welcome";
import { Soft } from "./components/Soft";
import { Classroom } from "./components/Classroom";
import { Features } from "./components/Features";
import { Say } from "./components/Say";
import { News } from "./components/News";
import { Footer } from "./components/footer";
=======
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Welcome } from "./sections/Welcome";
import { Soft } from "./sections/Soft";
import { Classroom } from "./sections/Classroom";
import { Skilline } from "./sections/Skilline";
import { Features } from "./sections/Features";
import { News } from "./sections/News";
import { Footer } from "./components/Footer";
>>>>>>> 95e286077a5f52e19f68c8386e0b1881a604049a

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
