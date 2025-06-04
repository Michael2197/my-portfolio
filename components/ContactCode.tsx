import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'Michaelmilad2110@gmail.com',
    href: 'michaelmilad2110@gmail.com',
  },

  {
    social: 'github',
    link: 'Michael2197',
    href: 'https://github.com/Michael2197',
  },

  {
    social: 'linkedin',
    link: 'Michael milad',
    href: 'http://linkedin.com/in/michael-milad-0a393b253',
  },

  {
    social: 'whatsApp',
    link: '+201141941184',
    href: 'https://wa.me/201141941184',
  },

  {
    social: 'facebook',
    link: 'Michael milad',
    href: 'https://facebook.com/MiCkEy.OonE',
  },

  {
    social: 'telegram',
    link: 'Michael',
    href: 'https://t.me/Michael211097',
  },
  
  // {
  //   social: 'peerlist',
  //   link: 'nitinranganath',
  //   href: 'https://peerlist.io/nitinranganath',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
