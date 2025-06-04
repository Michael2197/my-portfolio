import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Michael Milad</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from Cairo, Egypt. I primarily
              work with JavaScript and the React ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React.Js, but
              you&apos;ll also find me working with Node.js, Wordpress and Shopify
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Guitara Group</span> as
              Software Engineer 2, Working with a lean team of 4 frontend engineers to build the Gitara Group 
              website project, which includes multiple sections, each with its own dedicated websites.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been leading the development team in building a large-scale website for a holding company, 
              which encompasses multiple subsidiary websites. I also oversee the maintenance of our in-house 
              component library, icon library, and overall web infrastructure.

            </p>
          </section>

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section> */}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I enjoy working out at the gym, horseback riding, playing computer
              games, modding game files, listening to music, and relaxing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
