import React from "react";
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {ContactActions} from "../../store/contact-slice";

const ContactForm = () => {
    const {name, email, message} = useSelector(state => state.contact);
    const dispatch = useDispatch();

    const handleEmailChanges = (value) => {
        dispatch(ContactActions.emailUpdated(value))
    }
    const handleNameChanges = (value) => {
        dispatch(ContactActions.nameUpdated(value))
    }
    const handleMessageChanges = (value) => {
        dispatch(ContactActions.messageUpdated(value))

    }

    return (
        <React.Fragment>
            <form>
                <TextField id={"email"} label={"Your Email"} variant={"outlined"} value={email} onChange={(event) => handleEmailChanges(event.target.value)} />
                <TextField id={"name"} label={"Your Name"} variant={"outlined"} value={name} onChange={(event) => handleNameChanges(event.target.value)} />
                <TextField id={"message"} label={"Message"} variant={"outlined"} multiline rows={6} value={message} onChange={(event) => handleMessageChanges(event.target.value)} />
            </form>
        </React.Fragment>
    )
}

export default ContactForm;