import { useForm } from "react-hook-form";

import "./Login.styled.scss";
import Image from "../../assets/images/illustration.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/authReducer";

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginThunk(data));

    reset();

    console.log("LoginThunk ==>", data);
  };
  console.log(errors);

  return (
    <section className="container">
      <div className="box-image">
        <img src={Image} alt="Illustration" className="img-register" />
        <p className="support-image">Word · Translation · Grammar · Progress</p>
      </div>

      <div className="box">
        <h1 className="title">Login</h1>
        <p className="description">
          Please enter your login details to continue using our service:
        </p>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("Password", { required: true })}
            />

            <input type="submit" value="Login" />
            <NavLink to="/register" className="btn-register">
              Register
            </NavLink>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
