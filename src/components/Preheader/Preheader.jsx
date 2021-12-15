import React from "react";
import styles from "./Preheader.module.css";

const Preheader = () => {
    return (
        <>
            <div className={styles.preheader_container}>
                <div>
                    Email:
                    <a target="_blank" href="mailto:corpus@gmail.com">
                        corpus@gmail.com
                    </a>
                </div>
                <div>Режим работы: 09:00-18:00 (СБ/ВС-выходные)</div>
                <div>
                    WhatsApp: <a href="tel:+996556052952">+996556052952</a>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Preheader;
