import { useForm } from "react-hook-form";

import "./Register.styled.scss";
import Image from "../../assets/images/illustration.png";

const Register = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);
   console.log(errors);
  return (
    <section className="container">
      <div>
        <img src={Image} alt="Illustration" className="img-register" />
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
          </form>
        </div>
        <div>
        
          <button>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
