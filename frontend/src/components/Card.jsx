export default function Card({ children, className = "" }) {
    return <div className={`bg-gray-800 p-4 rounded-lg ${className}`}>{children}</div>;
  }
  