'use client';

import { useState } from 'react';
import styles from './ConsultationChatBot.module.css';
import { Calendar, X, Bot } from 'lucide-react';

export default function ConsultationChatBot() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div className={styles.chatContainer}>
      {!showPopup && (
        <div className={styles.floatingBubble} onMouseEnter={openPopup}>
          <Bot size={22} /> <span className={styles.bubbleText}>Chat with us</span>
        </div>
      )}

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupWindow}>
            <div className={styles.popupHeader}>
              <Bot size={24} /> Coye Wade is Online
              <button onClick={closePopup} className={styles.closeBtn}><X size={20} /></button>
            </div>
            <div className={styles.popupBody}>
              <p><strong>FREE CONSULTATION</strong></p>
              <p>👋 Hello! How can we assist you today?</p>
              <div className={styles.slotList}>
                <div className={styles.slot}><Calendar size={16} /> Today, 3:00 PM</div>
                <div className={styles.slot}><Calendar size={16} /> Today, 5:30 PM</div>
                <div className={styles.slot}><Calendar size={16} /> Tomorrow, 11:00 AM</div>
              </div>
              <button className={styles.bookBtn}>Book a Slot</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
