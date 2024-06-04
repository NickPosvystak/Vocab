import { useForm } from "react-hook-form";

import "./Register.styled.scss";
import Image from "../../assets/images/illustration.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/authReducer";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerThunk(data))
    reset();
    console.log("RegisterPage==DATA>", data);
  };
  console.log(errors);
  
  return (
    <section className="container">
      <div className="box-image">
        <img src={Image} alt="Illustration" className="img-register" />
        <p className="support-image">Word · Translation · Grammar · Progress</p>
      </div>

      <div className="box">
        <h1 className="title">Register</h1>
        <p className="description">
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              {...register("Name", { required: true })}
            />
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

            <input type="submit" value="Register" />
            <NavLink to="/login" className="btn-login">
              Login
            </NavLink>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
