import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import css from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>

        <p className={css.number}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

{
  /* <button onClick={() => onDelete(item.id)}>Delete</button> */
}
