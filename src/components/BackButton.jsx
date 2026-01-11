// src/components/BackButton.jsx
import "./BackButton.css";

export default function BackButton({ text, onClick }) {
  return (
    <button className="back-button-component" onClick={onClick}>
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <p>{text}</p>
    </button>
  );
}