import React from "react";
import { Formik, Form } from "formik";
import { Input } from "../FormElement/Input";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const handleSignupBtn = (event) => {
    console.log("submitting");
    navigate("/");
  };
  const validate = Yup.object({
    firstName: Yup.string()
      .required("Required")
      .min(5, "Must be atleast 5 character long"),
    lastName: Yup.string()
      .required("Required")
      .min(5, "Last name must be atleast 5 character long"),
    email: Yup.string().required("Email is required").email("email is invalid"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be atleast 6 character long"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Confirm password doesn't match"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        {
          console.log(values);
        }
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>

          <Form>
            <Input
              label="First Name"
              name="firstName"
              type="text"
              validators={validate}
            />
            <Input label="Last Name" name="lastName" type="text" />
            <Input label="Email" name="email" type="email" />
            <Input label="Password" name="password" type="password" />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
            <button
              className="btn btn-primary mt-3 ml-3"
              onClick={handleSignupBtn}
              type="button"
            >
              Login
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
