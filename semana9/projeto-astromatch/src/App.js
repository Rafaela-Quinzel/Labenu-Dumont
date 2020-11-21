import { useState } from 'react'
import { AppConteiner } from './Components/styled_App'
import HomeScreen from './Components/Home/HomeScreen';
import MatchScreen from './Components/Match/MatchScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState(true)

  const changeScreen = () => {
    setCurrentScreen(!currentScreen)
  }

  return (
    <AppConteiner>
      {currentScreen ? <HomeScreen changeScreen={changeScreen} />
      : <MatchScreen changeScreen={changeScreen} />}       
    </AppConteiner>
  );
}
export default App;
