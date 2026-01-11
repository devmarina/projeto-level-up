import "./SearchInput.css";

export default function SearchInput({ placeholder, value, onChange }) {
  return (
    <div className="search-container-component">
      <span className="search-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <input 
        type="text" 
        className="search-input-field"
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
      />
    </div>
  );
}