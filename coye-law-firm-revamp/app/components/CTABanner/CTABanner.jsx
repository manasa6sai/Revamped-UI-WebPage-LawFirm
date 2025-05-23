'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react'; // Simple phone icon
import styles from './CTABanner.module.css';

export default function CTABanner() {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`${styles.ctaButton} ${hovered ? styles.expanded : ''}`} 
      title="Call Us Now!"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.content}>
        <Phone size={28} className={styles.phoneIcon} />
        {hovered && (
          <div className={styles.phoneNumbers}>
            <p className={styles.attentionText}>Call Us Now!</p>
            <p>866 – Wade – Coye</p>
            <p>407 – 648 – 4940</p>
          </div>
        )}
      </div>
    </div>
  );
}
