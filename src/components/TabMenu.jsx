// src/components/TabMenu.jsx
import "./TabMenu.css";

export default function TabMenu({ activeTab, onTabChange }) {
  const tabs = [
    { label: "Flashcards", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
    { label: "Playlists", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg> },
    { label: "Slides", icon: "" }, // Apenas texto conforme imagem
    { label: "Livros", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> }
  ];

  return (
    <div className="tab-segmented-control">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={`tab-segment-item ${activeTab === tab.label ? "active" : ""}`}
          onClick={() => onTabChange(tab.label)}
        >
          {tab.icon && <span className="tab-icon-inner">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}