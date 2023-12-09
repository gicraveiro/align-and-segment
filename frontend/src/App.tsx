import React from 'react';
import './App.css';
import FileUpload from './FileUpload';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FileUpload />
      </header>
    </div>
  );
}

export default App;