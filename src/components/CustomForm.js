import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ label, register, required }) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
};

const Select = ({ label, name, register, required }) => (
  <>
    <label>{label}</label>
    <select name={name} {...register(label, { required })}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
);

const CustomForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First name" register={register} required />
        <Select label="Age" register={register} />
        <input type="submit" />
      </form>
    </>
  );
};

export default CustomForm;
