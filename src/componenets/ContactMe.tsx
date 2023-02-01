"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:batihandev@gmail.com?subject=${formData.subject}&body=Hi,My name is ${formData.name}. ${formData.message} ${formData.email}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-clip md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="space-y-10">
        <div className=" mt-10 flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            I have got just what you need.
            <span className="underline decoration-[#f7ab0a]/50">Lets Talk</span>
            .
          </h4>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon
            width={28}
            height={28}
            className="text-[#F7AB0A] h-7 w-7 animate-pulse"
          />
          <p className="text-2xl">+9054174302095</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon
            width={28}
            height={28}
            className="text-[#F7AB0A] h-7 w-7 animate-pulse"
          />
          <p className="text-2xl">Turkey/Tekirdağ</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon
            width={28}
            height={28}
            className="text-[#F7AB0A] h-7 w-7 animate-pulse"
          />
          <p className="text-2xl">batihandev@gmail.com</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            name=""
            id=""
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;