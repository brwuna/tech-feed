import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css'
import myprofile from '../assets/img/profile.jpg'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" />

            
            <div className={styles.profile}>
                <img className={styles.avatar} src={myprofile} alt="My Photo" />
                <strong>Bruna Nascimento</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}