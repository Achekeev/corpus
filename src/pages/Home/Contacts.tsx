import React from 'react';
import whatsAppImage from "assets/img/wa.svg"
import telegramImage from "assets/img/telegram.svg"
// import mailImage from "assets/img/mail.svg"

const Contacts = () => {
    const email = "corpus@gmail.com"
    const phoneNumber = "+996 312 909 010"
    const whatsAppNumber = "996556052952"
    return (
        <section className="contacts" id="contacts">
            <div className="left">
                <a href={`mailto:${email}`}>{email}</a>
                <a href="/" style={{textAlign: "center"}}>
                    Режим работы: 09:00-18:00<br/>
                    СБ/ВС-выходные
                </a>
            </div>
            <div className="right">
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                <a href={`https://wa.me/${whatsAppNumber}`}>
                    <img src={whatsAppImage} alt="" className="wa"/>
                </a>
                <a href="/">
                    <img src={telegramImage} alt=""/>
                </a>
            </div>
        </section>
    );
};

export default Contacts;