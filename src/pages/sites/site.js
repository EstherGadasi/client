import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Site = () => {
    // const [idimage,setidimage] = useState("")
    // const [num_of_turist,setnum_of_turist] = useState("")
    // const [ages,setages] = useState("")
    // const [children,setchildren] = useState("")
    // const [discription,setdiscription] = useState("")
    // const [time_it_takes,settime_it_takes] = useState("")
    // const [accible,setaccible] = useState("")
    // const [address,setaddress] = useState("")
    // const [place1,setplace1] = useState("")
    // const [place2,setplace2] = useState("")
    // const [constrainsId,setconstrainsId] = useState("")
    // const [err, setErr] = useState(null);
    // const navigate = useNavigate()
    
    useEffect(() => {
        console.log("we")
         const fetchData=async()=> {
            let config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const site = await axios.get("http://localhost:5000/site")
            if(site?.length) console.log(site)
        
           
          }
          fetchData()
       


      }, []);


      
  return (
    <>
    <div className="new-book">
        

        
    
    </div>
   
        
    </>
  )// idimage,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address
}

export default Site;