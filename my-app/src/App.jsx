import "./App.css";
import { Suspense, lazy } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";

const RegisterPage = lazy(() => import("./pages/RegisterPage/Register"));
const LoginPage = lazy(() => import("./pages/LoginPage/Login"));

const appRoutes = [
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Suspense fallback="Loading....">
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;