import "./App.css";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="app-container">
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
