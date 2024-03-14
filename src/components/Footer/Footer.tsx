import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Oleg Kuzmin</a>.
    </footer>
  );
}
