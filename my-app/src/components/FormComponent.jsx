import React from 'react';

const FormComponent = ({ handleSubmit, onSubmit, register, errors, printError }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-6">
        <label htmlFor="username" className="block mb-2">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          {...register("username", {
            required: "Username is required for form validation",
          })}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email_id" className="block mb-2">Email Id</label>
        <input
          type="text"
          id="email_id"
          name="email_id"
          placeholder="Enter your email id"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          {...register("email_id", { minLength: 4 })}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="channel_name" className="block mb-2">Channel Name</label>
        <input
          type="text"
          id="channel_name"
          name="channel_name"
          placeholder="Enter your channel name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          {...register("channel_name", { required: true })}
        />
        {errors.channel_name && <div className="text-red-500">{errors.channel_name.message}</div>}
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
    </form>
  );
};

export default FormComponent;


<form action="" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("email_id", {minLength:4 })}
        />
        <label htmlFor="channel_name">channel Name</label>
        <input
          type="text"
          id="channel_name"
          name="channel_name"
          placeholder="Enter your channel name"
          {...register("channel_name", { required: true })}
        />
        {errors.channel_name && printError(errors)}
        <button type="submit">Submit</button>
      </form>