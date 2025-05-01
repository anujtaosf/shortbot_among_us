import React from 'react';
import './App.css';
import followreina from './following-reina.MOV';
import tipping from './tipping-test.mov';
import robot from './robot_covering.jpg';

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

        <div className="d-flex justify-content-center align-items-center mb-5">
          <img
            src={robot}
            width="300"
            alt="Robot Overview"
            className="me-4"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div style={{ maxWidth: '600px'}}>
            <h5>Robot Introduction</h5>
            <p>
              Shortbot is a compact, human-height robotic platform designed to navigate crowded social environments with minimal disruption. Our goal with Shortbot was to create a working prototype that is able to traverse from an arbitrary point A to point B, some distance away. This prototype 
              will serve to show that a platform of this stature is feasible and has the possibility to enable researchers to conduct more realistic experiments and studies.
              Our final design stands at 1.24 meters (4.08 ft) tall with a total footprint less than 0.1156 square meters. Shortbot features a Realsense camera for navigation, 
              lights for visual and directional cues, omnidirectional 
              wheels, and reinforced mechanical supports to meet inertial stability requirements. While the ETH Zurich Ballbot served as our foundational platform, we 
              continuously refined the mechanical design throughout the semester, resulting in several visual and structural changes. The final system can be broken down 
              into three parts: the original ETH Zurich ballbot-inspired base, the mechanical upgrades we introduced, and the additional hardware components we integrated to 
              create a more intelligent and legible robot.
            </p>
          </div>
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
