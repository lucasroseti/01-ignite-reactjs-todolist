import LogoIMG from '../assets/todolist-logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoIMG} alt="" />
    </header>
  )
}
