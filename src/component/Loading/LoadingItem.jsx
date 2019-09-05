import React from 'react';
import './loadingItem.scss'

export default () => {
  return (
    <div>
      <div className="wrap">
        <div className="loading-box">
          <div className="loading-head loading"></div>
          <div className="loading-content loading"></div>
          <div className="loading-footer loading"></div>
        </div>
        <div className="loading-box">
          <div className="loading-head loading"></div>
          <div className="loading-content loading"></div>
          <div className="loading-footer loading"></div>
        </div>
        <div className="loading-box">
          <div className="loading-head loading"></div>
          <div className="loading-content loading"></div>
          <div className="loading-footer loading"></div>
        </div>
      </div>
    </div>
  )
}
