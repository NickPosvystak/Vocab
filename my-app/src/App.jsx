import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import { RotatingLines } from "react-loader-spinner";
// import CircularProgress from "@mui/material/CircularProgress";

const Home = lazy(() => import("./pages/Home/Home"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/Register"));
const LoginPage = lazy(() => import("./pages/LoginPage/Login"));
const RecommendPage = lazy(() => import("./pages/RecommendPage/Recommend"));
const TrainingPage = lazy(() => import("./pages/TrainingPage/Training"));



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
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/training" element={<TrainingPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
