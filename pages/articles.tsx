// import styles from '@/styles/ArticlesPage.module.css';

// const pdfFileUrl = '/Micheal CV.pdf'; // تأكد أن هذا المسار صحيح

// const ArticlesPage = () => {
//   return (
//     <div className={styles.layout}>
//       <h1 className={styles.pageTitle}>My Resume</h1>
//       <p className={styles.pageSubtitle}>
//         You can view the document below.
//       </p>
//       <div className={styles.container}>
//         {/* جعل PDF يشغل المساحة بالكامل */}
//         <embed src={pdfFileUrl} type="application/pdf" width="100%" height="700px" />
//       </div>
//     </div>
//   );
// };

// export default ArticlesPage;









import styles from '@/styles/ArticlesPage.module.css';

const pdfFileUrl = '/Michael-cv.pdf'; // تأكد أن هذا المسار صحيح

const ArticlesPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Resume</h1>
      <p className={styles.pageSubtitle}>You can view the document below.</p>
      <div className={styles.container}>
        {/* جعل PDF يشغل المساحة بالكامل */}
        <embed src={pdfFileUrl} type="application/pdf" width="100%" height="700px" />
      </div>
      {/* زر التحميل يظهر فقط على الهاتف */}
      <div className={styles.downloadButton}>
        <a href={pdfFileUrl} download="Michael-cv.pdf" className={styles.button}>Download CV</a>
      </div>
    </div>
  );
};

export default ArticlesPage;
