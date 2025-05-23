'use client';

import { useEffect, useState } from 'react';
import styles from './Reviews.module.css';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah D.',
    feedback:
      'The Coye Law team helped me win my disability case with compassion and confidence. I’m forever grateful.',
  },
  {
    name: 'James R.',
    feedback:
      'I felt truly heard and represented. They went above and beyond during one of the toughest times in my life.',
  },
  {
    name: 'Linda F.',
    feedback:
      'Wade and his team fought hard for my family. Their dedication and results speak volumes.',
  },
  {
    name: 'Thomas K.',
    feedback:
      'The firm’s personalized approach made a huge difference. I felt like more than just a case file.',
  },
  {
    name: 'Emily B.',
    feedback:
      'Prompt, professional, and powerful in court. Highly recommend them.',
  },
  {
    name: 'Carlos M.',
    feedback:
      'From the start, they took my concerns seriously. Excellent communication and outcome.',
  },
];

export default function AnimatedPopups() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    let index = 0;

    const showNext = () => {
      const top = Math.random() * 80 + 5;
      const side = Math.random() > 0.5 ? 'right' : 'right';

      const popup = {
        id: Date.now(),
        index,
        style: {
          position: 'fixed',
          top: '20%',
          [side]: '20px',
          zIndex: 10,
          maxWidth: '280px',
          animation: 'fadeInUp 0.8s ease',
        },
      };

      setActive(popup);

      index = (index + 1) % testimonials.length;
    };

    showNext();
    const interval = setInterval(showNext, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!active) return null;

  const { feedback, name } = testimonials[active.index];

  return (
    <div key={active.id} className={styles.card} style={active.style}>
      <div className={styles.stars}>
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={18} color="#f4c542" fill="#f4c542" />
        ))}
      </div>
      <p className={styles.feedback}>“{feedback}”</p>
      <p className={styles.reviewer}>— {name}</p>
    </div>
  );
}