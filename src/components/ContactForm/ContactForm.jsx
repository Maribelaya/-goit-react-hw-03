import css from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <form>
      <input className={css.name} type="text" name="login" />
      <input className={css.number} type="number" name="tel" />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
