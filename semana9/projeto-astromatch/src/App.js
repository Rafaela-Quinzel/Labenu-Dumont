import { useState } from 'react'
import {AppConteiner} from './components/styled'
import HomeScreen from './components/HomeScreen';
import MatcheScreen from './components/MatcheScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState(true)

  const changeScreen = () => {
    setCurrentScreen(!currentScreen)
 }


  return (
    <AppConteiner>
      {currentScreen ? <HomeScreen changeScreen={changeScreen} />
      : <MatcheScreen changeScreen={changeScreen} />}       
    </AppConteiner>
  );
}

export default App;
