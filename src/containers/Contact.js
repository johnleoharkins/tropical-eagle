import React from "react";
import classes from './Contact.module.css'
import Page from "./Page";
import ContactForm from "../components/contact/ContactForm";
const Contact = () => {
    return (
        <Page>
            <ContactForm />
        </Page>
    )
}

export default Contact;