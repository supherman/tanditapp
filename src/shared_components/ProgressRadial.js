import React from 'react';
import PropTypes from 'prop-types';

const ProgressRadial = ({ progress = 0, children, height = 100 }) => {
  const total = 339.292;
  const currentProgress = total * (1 - progress / 100);
  return (
    <div className="progress-radial" style={{ height: `${height}px` }}>
      <svg
        className="progress"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        strokeDashoffset={currentProgress}
      >
        <circle
          className="progress__value"
          cx="60"
          cy="60"
          r="54"
          strokeWidth="5"
          strokeDasharray={total}
        />
      </svg>
      <div>{children}</div>
    </div>
  );
};

ProgressRadial.propTypes = {
  progress: PropTypes.number,
  children: PropTypes.object,
  height: PropTypes.number,
};

export default ProgressRadial;
