import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Count only once when in view
    threshold: 0.3,     // Trigger when 30% of the component is visible
  });

  return (
    <div ref={ref} className="stats-container">
      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-number">
            {inView && <CountUp end={69} duration={2} />}+
          </span>
          <p>Languages</p>
        </div>
        <div className="stat-box">
          <span className="stat-number">
            {inView && <CountUp end={369} duration={2} separator="," />}k+
          </span>
          <p>Codes Compiled</p>
        </div>
        <div className="stat-box">
          <span className="stat-number">
            {inView && <CountUp end={111} duration={3} separator="," />}k+
          </span>
          <p>Visitors</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
