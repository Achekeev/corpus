import React from "react";
import styles from "./Preheader.module.css";

const Preheader = () => {
    return (
        <>
            <div className={styles.preheader_container}>
                <div>Email: corpus@gmail.com</div>
                <div>Режим работы: 09:00-18:00 (СБ/ВС-выходные)</div>
                <div>WhatsApp: +996556052952</div>
            </div>
            <hr />
        </>
    );
};

export default Preheader;
