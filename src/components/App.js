import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { getContactsSelector, getFilterSelector } from '../redux/selectors';
import { fetchContacts } from '../redux/operations/contactOperations';
import ContactForm from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Logo } from './logo/Logo';
import { Container } from './container/Container';
import slideLogoAppear from './slideAppear.module.css';
import popFilterStyles from './filter/pop.module.css';

export class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const contacts = this.props.contacts;
    const filter = this.props.filter !== '';
    return (
      <>
        <Container>
          <CSSTransition
            in
            appear
            timeout={500}
            classNames={slideLogoAppear}
            unmountOnExit
          >
            <Logo />
          </CSSTransition>

          <ContactForm />
          <CSSTransition
            in={contacts.length > 1 || filter}
            timeout={250}
            classNames={popFilterStyles}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
          {contacts.length < 1 && <p>You have no contacts yet</p>}
          <ContactsList />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getContactsSelector(state),
    filter: getFilterSelector(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
