import {Component} from 'react'
import './App.css';
import Header from './components/Header'
import NewsList from './components/NewsList';

const styles = {
  back: {
    height: '100%',
    width: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  main: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
}

class App extends Component{
  render(){
    return(
      <div style={styles.back}>
        <Header />
        <div style={styles.main}>
          <NewsList />
        </div>
      </div>  
    )
  }
}

export default App;
