import React from 'react';
import { useInView } from 'react-intersection-observer';

function TestInView() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <div ref={ref} style={{ height: '100px', backgroundColor: inView ? 'green' : 'red' }}>
        {inView ? 'In View' : 'Not In View'}
      </div>
    </div>
  );
}

export default TestInView; 