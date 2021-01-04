import Link from 'next/link'

import styles from './logo.module.scss'

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className={styles['logo']}>English for kids</a>
      </Link>
    </>
  )
}

export default Logo
