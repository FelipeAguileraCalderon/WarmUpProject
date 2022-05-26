import React from 'react'
import './Components.css'

const styles = {
    author: {
        color: '#999'
    },
    img: {
        height: '40px',
        width: '40px',
    },
    container: {
        left: '0px',
        height: '100%',
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px',
        cursor: 'pointer'
    },
    container1: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        right: '0px',
        marginRight: '10px',
        position: 'relative',
        width: '20%',
        justifyContent: 'space-between',
    },
    h3: {
        margin: 0,
        color: '#333'
    }
}

export default function News(props) {

    const { element, funcionDelete, arreglo } = props
    const auxiliarDate = new Date(element.created_at)
    let date
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const currentDay = new Date()
    const yesterday = new Date(new Date().setDate(new Date().getDate()-1))
    const hora12 = ((auxiliarDate.getHours()>12) ? (auxiliarDate.getHours() - 12) : auxiliarDate.getHours())
    const hora = ((hora12 < 10) ? ('0' + hora12) : hora12)
    const minutos = ((auxiliarDate.getMinutes() < 10) ? ('0' + auxiliarDate.getMinutes()) : auxiliarDate.getMinutes())
    const data = ((auxiliarDate.getHours()>=12) ? 'pm' : 'am')
    if(auxiliarDate.getDate() === currentDay.getDate() && auxiliarDate.getMonth() === currentDay.getMonth() && auxiliarDate.getFullYear() === currentDay.getFullYear()){
        
        date = `${hora}:${minutos} ${data}`
    }
    else if (auxiliarDate.getDate() === yesterday.getDate() && auxiliarDate.getMonth() === yesterday.getMonth() && auxiliarDate.getFullYear() === yesterday.getFullYear()){
        date = 'Yesterday'
    }
    else{
        date = `${months[auxiliarDate.getMonth()]} ${auxiliarDate.getUTCDate()}`
    }
    
    function openUrl(url){
        window.open(url,'_blank')
    }  

    return (
        <div className='row'>
            <div style={styles.container} onClick={()=>openUrl(element.story_url)}>
                <h3 style={styles.h3}>{element.story_title} <span style={styles.author}>- {element.author} -</span></h3>
            </div>
            <div style={styles.container1}>
                <h3 style={styles.h3}> {date}</h3>
                <button id='button' data-testid="button" className='button' onClick={() => funcionDelete(element,arreglo)}>
                    <img style ={styles.img} alt='img' src={'./img/trash-bin.png'} />
                </button>    
            </div>
        </div>
    )
}
