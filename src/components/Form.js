import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
        firstName:"Amar",
        lastName:"Alikadić"
    }
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", { required: "This field is required" })}
          placeholder="First name"
        />
        <p>{errors.firstName?.message}</p>
        <input
          {...register("lastName", {
            required: true,
            minLength: {
              value: 4,
              message: "Minimum length is 4",
            },
          })}
          placeholder="Last name"
        />
        <p>{errors.lastName?.message}</p>
        <select {...register("gender")}>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
