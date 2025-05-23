// app/components/Button/Button.js
import Link from 'next/link';
import styles from './Button.module.css';

const Button = ({ href, children, variant = 'primary', className = '', type = 'link', onClick }) => {
  const buttonClasses = `${styles.btn} ${styles[variant]} ${className}`;

  if (type === 'button' || onClick) {
    return (
      <button className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href || '#'} className={buttonClasses}>
      {children}
    </Link>
  );
};

export default Button;