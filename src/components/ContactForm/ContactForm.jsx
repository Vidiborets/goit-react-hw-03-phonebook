import React, { Component } from "react";
import shortid from 'shortid'
import PropTypes from 'prop-types';
import s from './ContactForm.module.scss'

class ContactForm extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        contacts: [],
        name: '',
        number:''
    };
      handleChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const contact = {
            id: shortid.generate(),
            name: this.state.name,
            number:this.state.number
        }

        this.setState(prevState => ({
            contacts:[contact,...prevState.contacts]
        }))

        this.props.onSubmit(contact)
        this.reset()
    }
    reset = () => {
        this.setState({
            contacts:[],
            name: '',
            number:''
        })
    }

    render() {
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        className={s.input}
                        placeholder={'Имя'}
                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        />
                </label>
                <label>
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        className={s.input}
                        placeholder={'Номер'}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </label>
                <button className={s.button} type="submit">Добавить контакт</button>
            </form>
            
        );
    }
}

export default ContactForm