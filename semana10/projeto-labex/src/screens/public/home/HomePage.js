import React from 'react'
import { HomeContainer, MainContainer, ButtonSignUp, ButtonLogin } from './styled'
import  Header  from '../../../components/Header'
import  Footer  from '../../../components/Footer'
import { useHistory } from 'react-router-dom'
// import Lottie from 'react-lottie';
// import animationData from '../../animation/animation.json' //animação



function HomePage(){
    //animação
    // const [ animationState, setAnimationState ] = useState({
    //     isStopped: false, isPaused: false
    // })

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    //   };


   const history = useHistory()

   const goToLoginPage = () => {
       history.push('/login')
   }

   const goToApplicationFormPage = () => {
        history.push('/inscreva-se/:id/apply')
   }

    return (
        <HomeContainer>
           <Header/>
               <MainContainer>
               {/* <AnimationContainer>
                    <Lottie options={defaultOptions}
                    height={300}
                    width={300}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                />
                </AnimationContainer> */}
                    <h2>Embarque conosco nessa aventura!</h2>
                    <ButtonSignUp onClick={goToApplicationFormPage}>Inscreva-se</ButtonSignUp>
                    <ButtonLogin onClick={goToLoginPage}>Login</ButtonLogin>
               </MainContainer>
           <Footer />
        </HomeContainer>
    )
}
export default HomePage;