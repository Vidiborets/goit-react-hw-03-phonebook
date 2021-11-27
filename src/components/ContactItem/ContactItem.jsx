import s from './ContactItem.module.scss'

const ContactItem =({contact,renderId})=> {
    return (
        <li className={s.itemList}>
            <span className={s.contactName}>{contact.name}</span>
            <a className={s.contactNumber} href={`tel:${contact.number}`}>{contact.number}</a>
            <button className={s.contactDelete} type="button" onClick={() => renderId(contact.id)}>Удалить</button>
        </li>
    )
}


export default ContactItem