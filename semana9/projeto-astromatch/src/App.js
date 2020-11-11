import { useEffect, useState } from 'react'
import {AppConteiner} from './components/styled'
import HomeScreen from './components/HomeScreen';
import MatcheScreen from './components/MatcheScreen';

function App() {
  const [currentPage, setCurrentPage] = useState("homescreen")

  const showMatches = () => {
    if(currentPage === "homescreen") {
       setCurrentPage("matches")
    } else {
      setCurrentPage("homescreen")
    }
 }


  return (
    <div>
      {currentPage === "homescreen" ? (
           <HomeScreen />
         ) : ( <MatcheScreen  changePage={showMatches}/>)}
         
            <AppConteiner>
              
              {/* <HomeScreen/> */}

              <MatcheScreen/>
            
            </AppConteiner>
    </div>
  );
}

export default App;
