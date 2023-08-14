
import logo from '../assets/white_nb_3.png'
import styles from './navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link } from 'react-router-dom';
export default function Navbar() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const menu = (anchor) => (
        <div className={styles.linksmenu}>
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/blog'>Blog</a>
            <a href='/about'>About</a>
        
            <a href='/contact'>
                <div className= 'std_btn' style={{backgroundColor:'#2A2A2A', color : 'white'}}>
                    Contact
                </div></a>

        </div>

    );

    return (
        <div className={styles.navbarbg}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <a href='/'><img src={logo}></img></a>
                </div>
                <div className={styles.links}>
                    <a href='/'>Home</a>
                    <a href='/projects'>Projects</a>
                    <a href='/blog'>Blog</a>
                    <a href='/about'>About</a>
              
                    <a href='/contact'>
                        <div className= 'std_btn' style={{backgroundColor:'#2A2A2A'}}>
                            Contact
                        </div></a>

                </div>
                <div onClick={toggleDrawer('right', true)} className={styles.menuButton}>
                    <MenuIcon style={{
                        color: "white",
                        transform: "scale(1.8)"
                    }} />
                </div>

            </div>


            <SwipeableDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {menu('right')}
            </SwipeableDrawer>
        </div>


    )
}
