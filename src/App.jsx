import { AppProvider } from "./contexts/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Details from "./pages/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen font-sans">
        <Navbar />
        <main className="flex-grow self-center w-full p-5 md:px-10 lg:px-16 2xl:px-24">
          <AppProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/exercises/:id" element={<Details />} />
            </Routes>
          </AppProvider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
