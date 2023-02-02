"use client";
import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "typings";
import Loader from "./Loader";
type Props = {
  pageInfo: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [mailSent, setMailSent] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (mailSent) return;
    setButtonClicked(true);

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sendMail`, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setMailSent(data));
    console.log(JSON.stringify(formData));
  };

  return (
    <div className="h-screen flex relative flex-col text-clip md:text-left max-w-7xl px-10 justify-start mx-auto items-center">
      <h3 className="pageTitles">Contact</h3>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-5 sm:space-y-10 overflow-auto px-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <div className=" mt-10 flex flex-col space-y-3 sm:space-y-10">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="underline decoration-[#f7ab0a]/50">Lets Talk</span>
            .
          </h4>
        </div>
        {/* <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon
            width={28}
            height={28}
            className="text-[#F7AB0A] h-7 w-7 animate-pulse"
          />
          <p className="text-2xl">+9054174302095</p>
        </div> */}
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon
            width={28}
            height={28}
            className="text-[#F7AB0A] h-7 w-7 animate-pulse"
          />
          <p className="text-base sm:text-xl md:text-2xl">Turkey/Tekirdağ</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon
            width={28}
            height={28}
            className="text-[#F7AB0A] h-7 w-7 animate-pulse"
          />
          <p className="text-base sm:text-xl md:text-2xl">{pageInfo?.email}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
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
              required
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-auto"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-auto"
            name="message"
            id="message"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            {!buttonClicked ? (
              "Submit"
            ) : mailSent === true ? (
              "Mail Sent"
            ) : (
              <Loader color="dark:fill-[#e50914]" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
