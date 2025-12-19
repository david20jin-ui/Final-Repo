import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExerciseLittleLemon from '../ExerciseLittleLemon';
import BookPage from './BookPage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ExerciseLittleLemon />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </main>
  );
}
