import React from 'react';

const Flash = ({type = 'success', children}) => {
  return(
    <div className={`flash-notice ${type}`}>
      {children}
    </div>
  )
}

export default Flash;
