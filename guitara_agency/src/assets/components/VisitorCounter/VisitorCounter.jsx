import React, { useEffect, useRef } from 'react';
import Flag from 'react-world-flags';
import VisitorCounterStyle from './VisitorCpounter.module.css';
import { fetchVisitorCounts } from '../../services/visitorService';

const animateCount = (element, targetNumber, duration) => {
  if (!element) {
    console.error("Element not found for animation");
    return;
  }

  const startNumber = parseInt(element.textContent) || 0;
  const increment = targetNumber / (duration / 16);
  let currentNumber = startNumber;

  const updateCount = () => {
    currentNumber += increment;
    if (currentNumber < targetNumber) {
      element.textContent = Math.floor(currentNumber);
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = targetNumber;
    }
  };

  updateCount();
};

const VisitorCounter = () => {
  // Refs to directly access elements
  const refs = {
    eg: useRef(null),
    sa: useRef(null),
    ae: useRef(null),
    qa: useRef(null),
    bh: useRef(null),
    sy: useRef(null),
    iq: useRef(null),
    total: useRef(null),
  };

  useEffect(() => {
    const loadVisitorCounts = async () => {
      try {
        const data = await fetchVisitorCounts();

        console.log('Fetched visitor data:', data); // Debug log

        // Animate counts for each country
        animateCount(refs.eg.current, data.eg || 0, 2000);
        animateCount(refs.sa.current, data.sa || 0, 2000);
        animateCount(refs.ae.current, data.ae || 0, 2000);
        animateCount(refs.qa.current, data.qa || 0, 2000);
        animateCount(refs.bh.current, data.bh || 0, 2000);
        animateCount(refs.sy.current, data.sy || 0, 2000);
        animateCount(refs.iq.current, data.iq || 0, 2000);

        // Animate total count
        animateCount(refs.total.current, data.total || 0, 2000);
      } catch (error) {
        console.error('Error loading visitor counts:', error);
      }
    };

    loadVisitorCounts();
  }, []);

  return (
    <div className={VisitorCounterStyle.CounterSection}>
      <div className={VisitorCounterStyle.TotalSection}>
        <span>
          Total Visitors: <span ref={refs.total}>0</span>
        </span>
      </div>

      <div className={VisitorCounterStyle.CounterSectionState}>
        <div>
          <Flag code="EG" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
          <span>Egypt: <span ref={refs.eg}>0</span></span>
        </div>
        <div>
          <Flag code="SA" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
          <span>Saudi Arabia: <span ref={refs.sa}>0</span></span>
        </div>
        <div>
          <Flag code="AE" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
          <span>UAE: <span ref={refs.ae}>0</span></span>
        </div>
        <div>
          <Flag code="QA" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
          <span>Qatar: <span ref={refs.qa}>0</span></span>
        </div>
        <div>
          <Flag code="BH" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
          <span>Bahrain: <span ref={refs.bh}>0</span></span>
        </div>
        <div>
          <Flag code="SY" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
          <span>Syria: <span ref={refs.sy}>0</span></span>
        </div>
        <div>
          <Flag code="IQ" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
          <span>Iraq: <span ref={refs.iq}>0</span></span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
