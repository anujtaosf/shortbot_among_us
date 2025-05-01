import React from 'react';
import './App.css';
import followreina from './following-reina.MOV';
import tipping from './tipping-test.mov';

function App() {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-3">Short-Bot Among Us</h1>
      <p className="text-center text-muted">
        Joseph Fedoronko, Reina Mezher, Adam Hung, Anuhea Tao – University of Michigan
      </p>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <a href="https://drive.google.com/file/d/1ZG3ojGwlJnvisGsxIIiyFzQFGmlw6QMx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Final Report</a>
        <a href="https://docs.google.com/presentation/d/1Lk74Ovz5xczITs0ZbWS5hNM_pjBpBkDaTUhyTTMFSSs/edit?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Expo Slides</a>
        <a href="https://github.com/anujtaosf/ROB450_all_code.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">GitHub Repo</a>
      </div>

      <div className="d-flex flex-column align-items-center gap-4 mt-5">
        <video src={followreina} autoPlay loop muted playsInline width="600" />
        <video src={tipping} autoPlay loop muted playsInline width="600" />
      </div>
    </div>
  );
}

export default App;