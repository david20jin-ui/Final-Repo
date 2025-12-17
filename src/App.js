import './App.css';
import ExerciseLittleLemon from './ExerciseLittleLemon';
import { Routes, Route } from 'react-router-dom';
import BookPage from './components/BookPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ExerciseLittleLemon />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
