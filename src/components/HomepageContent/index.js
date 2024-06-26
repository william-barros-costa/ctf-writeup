import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageContent () {
    return (
        <section>
            <div className={styles.main}>
                Personal Image
                <div className={styles.features}>
                    <div id={styles.Name}>
                        <Heading as='h1' className={styles.heading}>William Costa</Heading>
                        <em className={styles.moto}>Enthusiast for Cybersecurity</em>
                    </div>
                    <p className={styles.intro}>Welcome to my CTF Writeups Portfolio! I'm William Costa, a cybersecurity enthusiast who enjoys tackling Capture the Flag (CTF) problems. Here are my writeups and solutions to different CTF challenges. I hope you find these thoughts useful and motivating.</p>
                    <strong>Enjoy exploring!</strong>
                </div>
            </div>
        </section>
    );
}