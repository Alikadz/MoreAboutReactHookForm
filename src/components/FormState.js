import React from "react";
import { useForm } from "react-hook-form";

const FormState = () => {
  const {
    register,
    handleSubmit,
    formState: { isValidating },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  console.log("isValidating", isValidating);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name: </label>
        <input
          {...register("firstName", { required: true })}
          placeholder="First name: "
        />

        <label>Last name: </label>
        <input
          {...register("lastName", { required: "This field is required" })}
          placeholder="Last name: "
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default FormState;
