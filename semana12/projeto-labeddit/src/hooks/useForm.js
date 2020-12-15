import  { useState } from 'react'

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value })
    }
  
    // const restState = () => { // Limpa os inputs
    //   setForm(initialValues)
    // }
  
    return {form, onChange}
    // return {form, onChange, restState}; // Tem que passar aqui também
  }