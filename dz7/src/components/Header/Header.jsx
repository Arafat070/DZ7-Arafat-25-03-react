import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/start'>Start Screen</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/links'>Links</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/buttons'>MUI Buttons</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/admin'>Admin</NavLink>
            </nav>
        </header>
    );
};

export default Header;