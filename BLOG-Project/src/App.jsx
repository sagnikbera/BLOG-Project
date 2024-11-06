import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";




function App() {
  
  const [loading , setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch()
      
      }
    })
    .finally()
  } , [])

  return (
    <>
     
    </>
  )
}

export default App;



