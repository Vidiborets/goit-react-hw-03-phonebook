import { Component } from 'react'
import Container from './components/Container'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactFilter from './components/ContactFilter'
import Section from './components/Section'
import s from './App.module.scss'

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
        name: '',
        filter:'',
    };

    formSubmit = newContact => {
         const duplicateName = this.state.contacts.find(
            contact => contact.name === newContact.name,
         );
        
         if (duplicateName) {
             alert(`${newContact.name} is already on contacts`);
            return;
         }
      
        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
        console.log(newContact)
    }

    renderId = (id) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }))
    }

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        
        const normalizeFilter = filter.toLowerCase();

        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter),
        );
    };

    changeFilter = (e) => {
        this.setState({ filter: e.currentTarget.value })  
    }

    componentDidMount() {
        const contacts = localStorage.getItem('contacts')
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            this.setState({contacts:parsedContacts})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const nextContacts = this.state.contacts;
        const prevContacts = prevState.contacts;
        if (nextContacts !== prevContacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }
    }





    render() {
        const { filter } = this.state;
        const setContact = this.getVisibleContacts()
        return (
            <Container>
                <Section>
                    <h1 className={s.title}>Телефонная книга</h1>
                    <ContactForm onSubmit={this.formSubmit}/>
                    <h1 className={s.titleContact}>Контакты</h1>
                    <ContactFilter value={filter} onChange={this.changeFilter}/>
                    <ContactList contacts={setContact} renderId={this.renderId}/>
                </Section>
            </Container>
        )
    }
}

export default App












