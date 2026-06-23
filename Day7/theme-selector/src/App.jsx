import { useState, useEffect } from 'react'
import './index.css'

function App() {
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('userTheme');
    return savedTheme ? savedTheme : 'theme-light';
  });

  
  useEffect(() => {
    localStorage.setItem('userTheme', theme);
    document.body.className = theme;
  }, [theme]); 

  return (
    <div className="theme-container">
      <h2>Theme selector</h2>
      
      <p>Current Theme : <strong>{theme}</strong></p>
      
      <div className="button-group">
        
        <button onClick={() => setTheme('theme-light')}>☀️ Light Theme</button>
        <button onClick={() => setTheme('theme-dark')}>🌙 Dark Theme</button>
        <button onClick={() => setTheme('theme-blue')}>🌊 Blue Theme</button>
      </div>
    </div>
  )
}

export default App