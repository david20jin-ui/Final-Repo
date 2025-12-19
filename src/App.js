import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
