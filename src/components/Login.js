import React from "react";
import { Formik, Form } from "formik";
import { Input } from "../FormElement/Input";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    //console.log("submitting");
    navigate("/signup");
  };
  const validate = Yup.object({
    email: Yup.string().required("Email is required").email("email is invalid"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be atleast 6 character long"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
            <h1 className="my-4 font-weight-bold-display-4">Sign In</h1>

            <Form>
              <Input label="Email" name="email" type="email" />
              <Input label="Password" name="password" type="password" />

              <button className="btn btn-dark mt-3" type="submit">
                Sign In
              </button>
              <button className="btn btn-danger mt-3 ml-3" type="reset">
                Reset
              </button>
              <button
                className="btn btn-primary mt-3 ml-3"
                onClick={handleClick}
                type="button"
              >
                Register
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
