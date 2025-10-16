import Nav from "./Components/Nav"
import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs"
import Book from "./Components/Book"
import Staff from "./Components/Staff"
import Testimonials from "./Components/Testimonials"
import Footer from "./Components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Services from "./Components/Services"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
              <AboutUs />
              <Services></Services>
              <Staff />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route path="/book" element={<Book/>}/> </Routes>
    </BrowserRouter>
  );
}

