import React from 'react';
import './DownloadButton.css';
import { cv } from "../assets";

const DownloadButton = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1CdMZzcqmDnzAwIdAzLikfArFNVDgTCPq/view?usp=sharing', '_blank');
  };

  return (
    <div className="download-button" onClick={handleDownload}>
      <img src={cv} style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default DownloadButton;