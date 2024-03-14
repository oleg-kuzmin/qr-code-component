import styles from './page.module.css';
import QrCode from '@/components/QrCode/QrCode';

export default function Home() {
  return (
    <main className={styles.main}>
      <QrCode />
    </main>
  );
}
