'use client';

import Image from 'next/image';
import Button from '../Button/Button';
import styles from './Hero.module.css';
import { useState, useEffect } from 'react';
import AnimatedPopups from '../Reviews/Reviews'; // `Reviews.jsx` contains the default export for popups

const slides = [
  {
    headline: 'Sometimes, You Need ',
    subHeadline:
      'Discover why Wade Coye is trusted by veterans, Social Security claimants, and injured employees throughout the U.S.',
    highlights: [
      'Veteran',
      'Over 34 years experience',
      'Father of five',
      'Best selling legal author',
    ],
    image: '/images/wade-coye.png',
  },
  {
    headline: 'Defending Your Rights, With Honor & ',
    subHeadline:
      'Discover why Wade Coye is trusted by veterans, Social Security claimants, and injured employees throughout the U.S.',
    highlights: [
      'Veteran',
      'Over 34 years experience',
      'Father of five',
      'Best selling legal author',
    ],
    image: '/images/wade-coye.png',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}></div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroTextColumn}>
          <h1 className={styles.headline}>
            {slide.headline}
            <span className={styles.justiceText}>JUSTICE.</span>
          </h1>

          <p className={styles.subHeadline}>{slide.subHeadline}</p>

          <ul className={styles.coyeHighlights}>
            {slide.highlights.map((item, index) => (
              <li
                key={index}
                className={styles.highlightItem}
                style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
              >
                <span className={styles.bullet}></span> {item}
              </li>
            ))}
          </ul>

          <div className={styles.heroButtons}>
            <Button href="/full-biography">Full Biography</Button>
            <Button href="/my-free-books" className={styles.secondButton}>My Free Books</Button>
          </div>
        </div>

        <div className={styles.heroImageColumn}>
          <div className={styles.portraitWrapper}>
            <Image
              src={slide.image}
              alt="Wade Coye"
              width={350}
              height={460}
              className={styles.coyePortrait}
              priority
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 35vw, 350px"
            />
          </div>
        </div>
      </div>

      {/* Overlayed Animated Review Popups (aligned to extreme screen edges) */}
      <AnimatedPopups />


    </section>
  );
}
