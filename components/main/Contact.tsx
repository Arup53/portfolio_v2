"use client";

import emailjs from "emailjs-com";
import { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC__SERVICE_ID || "",

        process.env.NEXT_PUBLIC__TEMPLATE_ID || "",
        form.current || "",
        process.env.NEXT_PUBLIC__PUBLIC_KEY || ""
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="Contacts" className="py-12 text-white ">
      <h3 className="text-center text-white text-4xl font-bold my-12">
        Contacts
      </h3>
      <div className="md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* email */}

        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
        <div className="p-2">
          <h3 className="text-2xl  font-bold">Message Me</h3>
          <form ref={form} onSubmit={sendEmail} className="   rounded-lg">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="flex flex-col  ">
              <label>Message</label>
              <textarea className="text-black" name="message" />
            </div>

            <input
              className="px-2 py-1 bg-black text-white cursor-pointer mt-4"
              type="submit"
              value="Send"
            />
          </form>
        </div>

        {/* other contact*/}
        <div className="flex flex-col gap-4 px-2 py-4">
          <h3 className="text-2xl font-bold ">Contact Address</h3>
          <p className="flex items-center gap-1">
            <span>
              <MdEmail />{" "}
            </span>{" "}
            arupkumarhowlader12@gmail.com
          </p>
          <p className="flex items-center gap-1">
            <span>
              <FaPhoneSquareAlt />{" "}
            </span>{" "}
            +8801753580841
          </p>

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
