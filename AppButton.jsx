import React from 'react';

const AppButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default AppButton;
