import { Checkbox } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const ControlledInputs = () => {
  const { control, handleSubmit } = useForm({
    defaultValues:{
        checkbox:false
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default ControlledInputs;