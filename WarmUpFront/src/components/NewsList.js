import React, {useState, useEffect} from 'react'
import News from './News'
import axios from 'axios'

const styles = {
    layout: {
        width: '80%',
        height: 'auto',
        // backgroundColor: '#505050',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        marginTop: '10px',
        width: '100%',
        height: '100%',
        // backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between'
    }
}

export default function NewsList() {

    const [news, setNews] = useState([])
        
    useEffect(() => {
        axios.get('http://localhost:3001/new').then(
            res => {
                setNews(res.data)
            }
        )        

        setInterval(() => {
            const date = new Date()
            if(parseInt(date.getMinutes()) === 1 && parseInt(date.getSeconds()) === 0){
                axios.get('http://localhost:3001/new').then(
                    res => {
                        setNews(res.data)
                    }
                )
                console.log('Actualizando noticias');    
            }
        }, 1000);
    }, []);

    async function deleteNew(element){
        await axios.put(`http://localhost:3001/new/update/${element.story_id.toString()}`)
        axios.get('http://localhost:3001/new').then(
            res => {
                setNews(res.data)
            }
        ) 
    }

    return (
        <div style={styles.layout}>
            <div style={styles.container}>   
                {news.sort((act, pos) => {
                    const day1 = new Date(act.created_at)
                    const day2 = new Date(pos.created_at)
                    return day2.valueOf() - day1.valueOf()
                }).map(el => {
                    if(el.status !== false){
                        if(el.story_title != null || el.title != null){
                            if(el.story_url != null || el.url != null){
                                return <News key={el.story_id} arreglo={news} funcionDelete={deleteNew} element={el}/>
                            }
                            else return false   
                        }
                        else return false 
                    }
                    else return false
                })} 
            </div>
        </div>
    )
}
