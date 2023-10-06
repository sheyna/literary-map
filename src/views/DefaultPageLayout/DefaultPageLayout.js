import styles from './DefaultPageLayout.module.css';

function DefaultPageLayout({children}) {
  return (
    <main className={styles.defaultPage}>
      {children}
    </main>
  )
}

export default DefaultPageLayout
