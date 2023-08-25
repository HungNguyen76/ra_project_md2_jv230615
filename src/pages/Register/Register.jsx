import "./Register.scss";
import api from "@api";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  userName: Yup.string().required("Full Name is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
  avatar: Yup.string().required("Avatar is required"),
});
export default function Register() {
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      userName: e.target.userName.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      avatar: e.target.avatar.value,
    };
    let user = await api.user.createUser(newUser);
    if (user.status !== 200) {
      alert(user.response.data.message);
    }
    // setTimeout(() => {
    //   navigate("/login"); // Navigate to the login page
    // }, 2000);
  };
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <Formik
                    validationSchema={RegistrationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className="form-outline mb-4">
                        <Field
                          type="text"
                          name="userName"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          User Name
                        </label>
                        <ErrorMessage
                          name="userName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <Field
                          type="text"
                          name="firstName"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Your First Name
                        </label>
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <Field
                          type="text"
                          name="lastName"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Your Last Name
                        </label>
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <Field
                          type="text"
                          name="avatar"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Link Avatar User
                        </label>
                        <ErrorMessage
                          name="avatar"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <Field
                          type="email"
                          name="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <Field
                          type="password"
                          name="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <Field
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
