import { useState } from "react";
import Header from "@components/header/Header";
import { Outlet } from "react-router-dom";
import AppRouter from "@router/AppRouter.jsx";
import { Link } from "react-router-dom";
import "@/App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to="/">
        <Header />
      </Link>
      <div className="container">
        <AppRouter />
        <Outlet />
      </div>
    </>
  );
}

export default App;
