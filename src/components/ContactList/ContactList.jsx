import ContactItem from "../ContactItem";
import PropTypes from 'prop-types'
import s from './ContactList.module.scss'

const ContactList = ({ contacts, renderId }) => {
    return (
        <ul className={s.list}>
            {contacts.map(contact => (
                <ContactItem
                    contact={contact}
                    renderId={renderId}
                    key={contact.id}
                />
            ))}
       </ul>
  )  
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  renderId: PropTypes.func.isRequired,
};

export default ContactList