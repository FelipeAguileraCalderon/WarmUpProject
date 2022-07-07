import React from 'react'
import { useAuth } from '../context/authContext'

const styles = {
    header: {
        width: '100%',
        height: '250px',
        margin: 0,
        background: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7)), #6b6b6b',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0 5px 10px rgb(0,0,0,.9)',
        flexShrink: '0',
        position: "relative",
        justifyContent: "space-between"
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        height: '100%',
        color: 'white',
        marginLeft: 20,
        fontSize: '1.8rem'
    },
    h1: {
        margin: 0,
        padding: '0px',
        fontSize: '4.5rem'
    },
    p: {
        margin: '0px 0px 0px 5px'
    }
}

export default function Header() {

    const { logout } = useAuth()

    async function handleLogout(){
        await logout()
    }

    return (
        <div style={styles.header}>
            <div style={styles.container}>
                <h1 style={styles.h1}>HN Feed</h1>
                <p style={styles.p}>We {'<3'} hacker news!</p>    
            </div>
            <button onClick={() => handleLogout()}>Cerrar sesión</button>
        </div>
    )
}
