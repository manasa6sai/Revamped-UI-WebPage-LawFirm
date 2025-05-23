'use client';

import styles from './ResultsHighlights.module.css';

const results = [
  {
    title: 'Spinal Injury Case Leads to Large Settlement',
    amount: '$3,300,000',
    action: 'Click to Learn More',
  },
  {
    title: 'Man Injured in Auction Received Just Compensation',
    amount: '$657,000',
    action: 'Click to Learn More',
  },
  {
    title: 'Injured School Bus Driver Received Compensation',
    amount: '$1,000,000',
    action: 'Click to Learn More',
  },
];

export default function ResultsHighlights() {
  return (
    <section className={styles.resultsSection}>
      <h2 className={styles.sectionTitle}>Case Results</h2>
      <div className={styles.cardsContainer}>
        {results.map((result, index) => (
          <div key={index} className={styles.resultCard}>
            <h3 className={styles.cardTitle}>{result.title}</h3>
            <div className={styles.amount}>{result.amount}</div>
            <p className={styles.action}>{result.action}</p>
          </div>
        ))}
      </div>
      <div className={styles.centerButton}>
        <button className={styles.viewAllBtn}>View All Results</button>
      </div>
    </section>
  );
}
