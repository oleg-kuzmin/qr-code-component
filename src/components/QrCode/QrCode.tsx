import styles from './QrCode.module.scss';
import Image from 'next/image';

export default function QrCode() {
  return (
    <article className={styles.QrCode}>
      <Image
        className={styles.QrCode__Image}
        src="/images/image-qr-code.png"
        alt="qr-code to frontendmentor.io"
        width={288}
        height={288}
      />
      <h2 className={styles.QrCode__Title}>Improve your front-end skills by building projects</h2>
      <p className={styles.QrCode__SubTitle}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </article>
  );
}
