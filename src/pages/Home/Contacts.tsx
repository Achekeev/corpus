import React from 'react';
import whatsAppImage from "assets/img/wa.svg"
import telegramImage from "assets/img/telegram.svg"
import mailImage from "assets/img/mail.svg"

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <a href="mailto:corpus@gmail.com">corpus@gmail.com</a>
            <a href="tel:+996700500500">+996 700 500 500</a>
            <a href="/">
                <img src={whatsAppImage} alt="" className="wa" />
            </a>
            <a href="/">
                <img src={telegramImage} alt="" />
            </a>
            <a href="/">
                <img src={mailImage} alt="" />
            </a>
        </section>
    );
};

export default Contacts;