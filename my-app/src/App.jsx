import "./App.css";
import { Suspense, lazy } from "react";
// import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";

const Home = lazy(() => import("./pages/Home/Home"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/Register"));
const LoginPage = lazy(() => import("./pages/LoginPage/Login"));
const RecommendPage = lazy(() => import("./pages/RecommendPage/Recommend"));
const TrainingPage = lazy(() => import("./pages/TrainingPage/Training"));

const appRoutes = [
  {
    path: "/Vocab/my-app",
    element: <Home />,
  },
  {
    path: "/Vocab/register",
    element: <RegisterPage />,
  },
  {
    path: "/Vocab/login",
    element: <LoginPage />,
  },
  {
    path: "/Vocab/recommend",
    element: <RecommendPage />,
  },
  {
    path: "/Vocab/training",
    element: <TrainingPage />,
  },
];

function App() {
  return (
    // <Router>
      <div className="App">
        <Navigation />

        <Suspense fallback="Loading....">
          <Routes>
            {/* {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))} */}
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    // </Router>
  );
}

export default App;
