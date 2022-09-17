import styles from './Header.module.css'
// import IgniteLogo from '../assets/img/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src="https://icons-for-free.com/iconfiles/png/512/coding+dev+development+embed+programming+tag+icon-1320185006962436821.png" alt="Logo Ignite" />
            <h3>Tech Feed</h3>
        </header>
    )
}