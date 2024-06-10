import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import { RotatingLines } from "react-loader-spinner";
import RestrictedRoute from "./components/Restricted/RestrictedRoute";
// import CircularProgress from "@mui/material/CircularProgress";

const Home = lazy(() => import("./pages/Home/Home"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/Register"));
const LoginPage = lazy(() => import("./pages/LoginPage/Login"));
const RecommendPage = lazy(() => import("./pages/RecommendPage/Recommend"));
const TrainingPage = lazy(() => import("./pages/TrainingPage/Training"));

const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recommend",
    element: <RecommendPage />,
  },
  {
    path: "/training",
    element: <TrainingPage />,
  },
  {
    path: "/register",
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
];

function App() {
  return (
    <div className="App">
      <Navigation />

      <Suspense
        fallback={
          <div className="loader">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }
      >
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
