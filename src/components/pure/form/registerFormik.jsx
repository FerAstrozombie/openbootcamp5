import { User } from "../../../models/users.class";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm: "",
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, "Username too short")
                .max(12, "Username to long")
                .required("Username is required"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a role: User / Admin")
                .required("Role is required"),
            password: Yup.string()
                .min(8, "Password to short")
                .required("Password is required"),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: () => Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Password must match!"
                    )
                }).required("You must confirm the password")
        }
    )

    const submit = (value) => {
        alert("register user");
    }
    return (
        <div>
            <h4>Register form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));                  
                }}
            >
                {({ errors, touched, isSubmitting, values, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="Your username" />
                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name='username' component="div" />
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component="div" />
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component="div" />
                            )
                        }

                        <label htmlFor="confirm">Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm password"
                            type="password"
                        />
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name='confirm' component="div" />
                            )
                        }

                        <button type="submit">Register account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
