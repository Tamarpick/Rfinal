import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CatSearch from './pages/CatSearch';
import CatProfilePage from './pages/CatProfilePage';
import About from './pages/About';
import NotFound from './pages/NotFound/NotFound';

// main App component
function App() {

  // render the main App component with navbar on top, content dependent on route, and footer
  return (
    <Container fluid className="text-light bg-dark px-0 d-flex flex-column mainAppContainer">
      <Header />
      <Container fluid className="px-0 flex-grow-1 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/cat-search" element={<CatSearch />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/cat-profile" element={<CatProfilePage />} />

        </Routes>
      </Container>
      <Footer />
    </Container>
  )
}

export default App
