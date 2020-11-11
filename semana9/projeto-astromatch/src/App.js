import { useEffect, useState } from 'react'
import {AppConteiner} from './components/styled'
import HomeScreen from './components/HomeScreen';
import MatchScreen from './components/MatchScreen';

function App() {
  return (
    <AppConteiner>
      
      <HomeScreen/>

      <MatchScreen/>
    
    </AppConteiner>
  );
}

export default App;
