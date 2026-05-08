import { useEffect, useState } from 'react'
import { supabase } from './utils/supabaseClient'


function App() {

  const [animals, setAnimals] = useState([])


  useEffect(() =>{
    async function getData (){
      const  { data } = await supabase.from("Animals").select("*")
      setAnimals(data) 

    
    }

    getData()
  }, [])
 

  return (
     <>

      {animals.map((animal) => {
        return <p key={animal.id}>
        {animal.name}
        </p>
      })}

     </>
  )
}

export default App
