import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm, FormProvider } from "react-hook-form";
const YouTubeForm = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log("submit datda", data);
  };
  return (
    <div>
      <FormProvider {...form}>
      <form action="" onSubmit={handleSubmit(onSubmit)} noValidate >
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your userName"
          {...register("username", {
            required:
              "username is require you can't go without it for the form validation",
          })}
        />
        <label htmlFor="email_id">Email Id</label>
        <input
          type="text"
          id="email_id"
          name="email_id"
          placeholder="Enter your email_id"
          {...register("email_id",{pattern})}
        />
        <label htmlFor="channel_name">channel Name</label>
        <input
          type="text"
          id="channel_name"
          name="channel_name"
          placeholder="Enter your channel name"
          {...register("channel_name")}
        />
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
      </FormProvider>
    </div>
  );
};

export default YouTubeForm;
