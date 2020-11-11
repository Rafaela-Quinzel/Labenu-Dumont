import { useEffect, useState } from 'react'
import {AppConteiner} from './components/styled'
import HomeScreen from './components/HomeScreen';
import MatcheScreen from './components/MatcheScreen';

function App() {
  return (
    <AppConteiner>
      
      <HomeScreen/>

      <MatcheScreen/>
    
    </AppConteiner>
  );
}

export default App;
