import styled from 'styled-components'

// Styled ListTripsPage //
export const TripsTitle = styled.h2`
  text-align: center;
`

export const ImagePlanet = styled.img`
  width: 150px;
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin-left: 4%;
  margin-top: 5%;
`

export const TripContainer = styled.div`
  text-align: center;
  border: 1px solid black;
  width: 16vw;
  height: 50vh;
`

export const NameTrip = styled.p`
  font-size: 14px;
  margin: 2%;
  padding: 5%;
`


// Styled TripDetailsPage //
export const DetailsContainer = styled.div`
  display: grid;
  justify-items: center;
`

export const DetailsTrip = styled.div`
  text-align: center;
  border: 1px solid black;
  width: 50vw;
  height: 80vh;
`

export const ButtonSignUp = styled.button`
  width: 10vw;
  padding: 10px;
  background-color: blue;
  color: white;
`


// Styled CreateTripPage //
export const CreateContainer = styled.div`
  display: grid;
  justify-items: center;
`

export const ButtonSave = styled.button`
  width: 10vw;
  padding: 10px;
  background-color: blue;
  color: white;
`

export const InputCreate = styled.input`
  width: 22vw;
  margin: 1%;
  padding: 5px;
`