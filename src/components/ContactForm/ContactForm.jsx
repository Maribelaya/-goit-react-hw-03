import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("This is a required field"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("This is a required field"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({ id: Date.now(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formField}>
          <label htmlFor={nameFieldId}>Name:</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formField}>
          <label htmlFor={numberFieldId}>Number:</label>
          <Field
            className={css.input}
            type="number"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

//       validationSchema={userSchema}
//       onSubmit={(values, actions) => {
//         console.log(values);
//         onAdd({ id: Date.now(), ...values });
//         actions.resetForm();
//       }}
//     >
//       <Form className={css.form} autoComplete="off">
//         <div className={css.formGroup}>
//           <label htmlFor={nameFieldId}>Username:</label>
//           <Field type="text" name="username" id={nameFieldId} />
//           <ErrorMessage
//             className={css.error}
//             name="username"
//             component="span"
//           />
//         </div>

//         <div className={css.formGroup}>
//           <label htmlFor={accessFieldId}>Access:</label>
//
//           <ErrorMessage className={css.error} name="access" component="span" />
//         </div>

//         <button type="submit">Add user</button>
//       </Form>
//     </Formik>
//   );
// };
export default ContactForm;
