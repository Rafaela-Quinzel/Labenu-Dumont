import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


export function usePostTrips(url, initialState) {
   const [trip, setTrip] = useState(initialState)

   const body = {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
   }

   useEffect(()=> {
       axios.post(url)
       .then((response) => {
           setTrip(response.data.trips)
       })
       .catch((error) => {
           console.log(error)
       })
   }, [url])

   return trip
}