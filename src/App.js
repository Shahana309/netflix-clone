import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import {originals, comedy, horror, documentaries} from './urls'
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={comedy} title='Children and family movies' isSmall />
    <RowPost url={horror} title='Horror movies' isSmall />
    <RowPost url={documentaries} title='Horror movies' isSmall />


    </div>
  )
}

export default App;



