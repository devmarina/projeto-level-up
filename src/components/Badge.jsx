import './Badge.css';

export default function Badge({ text, color = '#eee', variant = 'filled' }) {
  const style = variant === 'filled' 
    ? { backgroundColor: color, color: '#333' } 
    : { border: `1px solid ${color}`, color: color };

  return <span className="badge-container" style={style}>{text}</span>;
}