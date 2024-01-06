"use client";

import React, { useState } from "react";
import supabase from "../config/supabaseClient";
interface senderInfoInterface {
  name: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [senderInfo, setSenderInfo] = useState<senderInfoInterface>({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSenderInfo((prevState: senderInfoInterface) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(senderInfo);
  };

  const sendContact = async () => {
    setIsLoading(true);
    const { error } = await supabase.from("Messages").insert(senderInfo);
    setSenderInfo({
      name: "",
      email: "",
      message: "",
    });
    if (error) {
      console.log(error);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  };
  return (
    <div
      id="contact"
      className="p-2 text-center bg-black flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl sm:text-3xl text-emerald-500 pt-7 p-2">
        Contact Me
      </h1>
      <p className="text-sm px-4 sm:text-base">
        If you have any suggestion or complains or wanna talk about your project
        feel free to ping me
      </p>
      <div className="text-start flex gap-3 sm:gap-11 w-[80%] justify-center py-16">
        <div className="w-[45%] sm:w-[35%]">
          <div className="flex flex-col m-3 ">
            <label htmlFor="name" className="py-2 text-base sm:text-lg">
              Name
            </label>
            <input
              type="text"
              value={senderInfo.name}
              onChange={changeHandler}
              className="bg-stone-700  p-1 "
              placeholder="Enter yout name"
              name="name"
            />
          </div>
          <div className="flex flex-col m-3 ">
            <label htmlFor="email" className="py-2 text-base sm:text-lg">
              Email
            </label>
            <input
              type="text"
              value={senderInfo.email}
              onChange={changeHandler}
              className="bg-stone-700  p-1 "
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <button
            onClick={sendContact}
            disabled={isLoading}
            className="bg-transparent m-3 hover:bg-emerald-600 transition text-sm sm:text-base px-4 md:px-8  py-3 border-[1px] border-emerald-500"
          >
            Contact Me
          </button>
        </div>
        <div className="flex flex-col m-3 mb-0 ">
          <label htmlFor="name" className="py-2 text-lg">
            Message
          </label>
          <textarea
            name="message"
            value={senderInfo.message}
            onChange={changeHandler}
            className="bg-stone-700  p-1 hidden sm:block "
            id=""
            cols={30}
            rows={8}
          ></textarea>
          {/* <textarea
            name="message"
            className="bg-stone-700  p-1 block sm:hidden"
            id=""
            cols={20}
            rows={8}
          ></textarea> */}
        </div>
      </div>
      {/* <div className="py-36">
        <h1 className="text-white text-2xl p-5">
          {`"There are only two hard things in computer science: cache invalidation and naming things." `}
        </h1>
        <p className="text-base text-emerald-500">Phil Karlton </p>
      </div> */}
    </div>
  );
};

export default Contact;
