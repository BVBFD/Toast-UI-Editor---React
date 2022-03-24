import './App.css';
import React, { useState, useEffect } from 'react';
import EditorPart from './editor/Editor.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [initialValue, setInitialValue] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch(
        `https://myportfolioblogproject.herokuapp.com/posts/621c377733f8394b8921c1f0`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await response.json();
      setInitialValue(data.text);
    };

    fetchInitialData();
  }, [initialValue]);

  console.log(initialValue);

  return (
    <Routes>
      <Route
        path={'/editor'}
        element={<EditorPart initialValue={initialValue} />}
      />
    </Routes>
  );
};

export default App;
