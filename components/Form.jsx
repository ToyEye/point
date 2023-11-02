"use client";

import React from "react";
import { Formik } from "formik";
import Heading from "./reusable/Heading";

const Form = () => {
  return (
    <section className="form-page flex items-center">
      <div className="container">
        <Heading
          text="Contact me"
          tag="h1"
          className="mb-8 text-xl text-light  text-center font-semibold leading-6 "
        />

        <Formik
          initialValues={{ name: "", email: "", number: "", text: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 m-auto md:w-[380px] text-slate-900  "
            >
              <input
                className="py-3 pl-2 rounded-md"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter Your name"
                required
              />
              {errors.name && touched.name && errors.name}
              <input
                className="py-3 pl-2 rounded-md"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter Your email"
                required
              />
              {errors.email && touched.email && errors.email}
              <input
                className="py-3 pl-2 rounded-md"
                type="tel"
                name="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
                placeholder="Enter Your number"
              />
              {errors.number && touched.number && errors.number}
              <textarea
                className="py-3 pl-2 rounded-md h-[170px] resize-none"
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                placeholder="Enter Your text"
              />
              {errors.text && touched.text && errors.text}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto block py-[10px] w-full  text-center text-light  px-5 rounded-md bg-bgBtn hover:bg-bgBtnHover focus:bg-bgBtnHover transition"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Form;
