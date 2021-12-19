import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-4">
        <Container>
          <Routes>
            <Route index path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
