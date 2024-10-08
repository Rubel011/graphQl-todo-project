import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm, FormProvider } from "react-hook-form";
import { useParams } from "react-router-dom";
const YouTubeForm = () => {
  const { id } = useParams();
  const form = useForm({
    defaultValues: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      return {
        email_id: data?.email || "",
        username: data?.username || "",
        channel_name: "",
      };
    },
    mode: "onChange",
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    console.log("submit datda", data);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-8 px-2"
      >
        <div className="mb-6">
          <label htmlFor="username" className="block mb-2">
            UserName:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("username", {
              // you can pass directly the required message
              required: "Username is required for form validation",
              validate: (value) =>
                value === "rubel" && "rubel username is not allowed",
            })}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email_id" className="block mb-2">
            Email Id:
          </label>
          <input
            type="text"
            id="email_id"
            placeholder="Enter your email id"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("email_id", {
              // you can also pass an object containing the below properties to required
              required: {
                value: true,
                message: "Email field is required to submit",
              },
              pattern: {
                value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter an valid email Id",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue === "rubel@gmail.com" &&
                    "Admin Email ID is not allowed"
                  );
                },
              },
            })}
          />
          {errors.email_id && (
            <p className="text-red-500">{errors.email_id.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="channel_name" className="block mb-2">
            Channel Name:
          </label>
          <input
            id="channel_name"
            type="text"
            placeholder="Enter your channel name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("channel_name", {
              required: "name feild is required",
              validate: (value) =>
                value === "love story" &&
                "love story channel name is not allowed",
            })}
          />
          {errors.channel_name && (
            <p className="text-red-500">{errors.channel_name.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </FormProvider>
  );
};

export default YouTubeForm;
