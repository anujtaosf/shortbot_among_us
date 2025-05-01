import React from 'react';
import './App.css';
import followreina from './following-reina.MOV';
import tipping from './tipping-test.mov';

function App() {
  return (
    <div className="py-5">
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1rem' }}>
        <h1 className="display-4 text-center mb-3">Short-Bot Among Us</h1>
        <p className="text-center text-muted">
          Joseph Fedoronko, Reina Mezher, Adam Hung, Anuhea Tao – University of Michigan
        </p>

      <div className="d-flex justify-content-center gap-3 mb-4">
      <a href="https://drive.google.com/file/d/1ZG3ojGwlJnvisGsxIIiyFzQFGmlw6QMx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Final Report</a>
      <a href="https://docs.google.com/presentation/d/1Lk74Ovz5xczITs0ZbWS5hNM_pjBpBkDaTUhyTTMFSSs/edit?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Expo Slides</a>
      <a href="https://github.com/anujtaosf/ROB450_all_code.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">GitHub Repo</a>
      </div>


        <hr style={{ borderTop: '5px dotted #666', margin: '2.5rem 0' }} />

        <div className="d-flex align-items-center mb-5">
          <div className="me-5 flex-grow-1">
            <h5>Following AprilTag Demo</h5>
            <p>
              This video shows Short-Bot using AprilTag detection to track and follow a person. Its LED lights reflect its state: red means it's searching, and green means it's actively following a target.
              While searching, the robot spins in place until it detects the tag. Once it reaches the target, the lights turn red again to signal that it has stopped and is awaiting the next command.
            </p>
          </div>
          <video src={followreina} autoPlay loop muted playsInline width="450" />
        </div>

        <div className="d-flex align-items-center mb-5">
          <video src={tipping} autoPlay loop muted playsInline width="450" className="me-5" />
          <div className="flex-grow-1">
            <h5>Stability & Tipping Test</h5>
            <p>
              Short-Bot is designed with a small footprint to navigate crowded environments. This demo highlights its ability to recover when exposed to real-world obstacles that might cause it to tip over.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
