import { useState } from "react";
import Admin from "./layouts/Admin";
import "./styles/admin.css";
import "./styles/custom.css";
import Auth from "./layouts/Auth";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <div>
      {isAuthenticated ? (
        <Admin handleLogout={handleLogout} />
      ) : (
        <Auth handleLogin={handleLogin} />
      )}
      </div>
    </div>
  );
}

export default App;
