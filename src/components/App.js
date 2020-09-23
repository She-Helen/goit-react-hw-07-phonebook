import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import {
  getContactsSelector,
  getFilterSelector,
  getLoadingSelector,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations/contactOperations';
import ContactForm from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Logo } from './logo/Logo';
import { Container } from './container/Container';
import { CustomSpinner } from './customSpiner/CustomSpiner';
import slideLogoAppear from './slideAppear.module.css';
import popFilterStyles from './filter/pop.module.css';

export class App extends Component {
  state = {
    isMounted: false,
  };
  componentDidMount() {
    this.props.onFetchContacts();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      if (!prevState.isMounted) {
        this.setState({ isMounted: true });
      }
    }
  }

  render() {
    const contacts = this.props.contacts;
    const filter = this.props.filter !== '';
    const isMounted = this.state.isMounted;
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
          {isMounted && contacts.length < 1 && (
            <p className="Text">You have no contacts yet</p>
          )}
          <ContactsList />
          {this.props.isLoading && <CustomSpinner />}
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getContactsSelector(state),
    filter: getFilterSelector(state),
    isLoading: getLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
