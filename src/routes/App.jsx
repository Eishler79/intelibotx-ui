
import React from "react";
import SmartTrade from "../pages/SmartTrade";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';  // <- ¡Correcto!
import './index.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <SmartTrade />
    </div>
  );
}

export default App;
