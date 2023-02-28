import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Site = () => {
    const [idimage,setidimage] = useState("")
    const [num_of_turist,setnum_of_turist] = useState("")
    const [ages,setages] = useState("")
    const [children,setchildren] = useState("")
    const [discription,setdiscription] = useState("")
    const [time_it_takes,settime_it_takes] = useState("")
    const [accible,setaccible] = useState("")
    const [address,setaddress] = useState("")
    const [place1,setplace1] = useState("")
    const [place2,setplace2] = useState("")
    const [constrainsId,setconstrainsId] = useState("")
    const [err, setErr] = useState(null);
    const navigate = useNavigate()
    
    useEffect(() => {
        console.log("we")
        async function fetchData() {
            let config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const site = await axios.get("http://localhost:3000/site",config)
            if(site?.length) console.log(site)
            // const {data:_authours} = await axios.get("http://localhost:3000/api/authors",config)
            // if(_authours?.length) setAutours(_authours)
           
          }
          fetchData()
       


      }, []);


      const handleAddBook = async (e) => {
        e.preventDefault();
        try {  
            let config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }    
          const res = await axios.post("http://localhost:3000/site",  {  idimage,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address}, config);
          navigate("/book/list")
        } catch (err) {
          setErr(err.response.data?.message);
        }
      };
    //   if(!categories.length || ! autours.length) return <h1>LOADING....</h1>
  return (
    <>
    <div className="new-book">
        <form>

        
    {/* <select  onChange={(e)=>set(e.target.value)} >
        <option>-select--</option>
        {categories.map((category)=>{
            return <option  value={category.id} >{category.name}</option>
        })}
    </select>
    <select  onChange={(e)=>setAuthour(e.target.value)}>
    <option>-select--</option>

        {autours.map((author)=>{
            return <option value={author.id} >{author.name}</option>
        })}
    </select> */}
   
    <input
              type="text"
              placeholder="idimage"
              name="idimage"
              onChange={(e)=>setidimage(e.target.value)}
            />
    <input
              type="text"
              placeholder="num_of_turist"
              name="num_of_turist"
              onChange={(e)=>setnum_of_turist(e.target.value)}
            />
    <input
        type="text"
        placeholder="ages"
        name="ages"
        onChange={(e)=>setages(e.target.value)}
    />
    <input
        type="text"
        placeholder="children"
        name="children"
        onChange={(e)=>setchildren(e.target.value)}
    />
    <input
        type="text"
        placeholder="discription"
        name="discription"
        onChange={(e)=>setdiscription(e.target.value)}
    />
    <input
        type="text"
        placeholder="time_it_takes"
        name="time_it_takes"
        onChange={(e)=>settime_it_takes(e.target.value)}
    />
    <input
        type="text"
        placeholder="accible"
        name="accible"
        onChange={(e)=>setaccible(e.target.value)}
    />
     <input
        type="text"
        placeholder="place1"
        name="place1"
        onChange={(e)=>setplace1(e.target.value)}
    />
    <input
        type="text"
        placeholder="place2"
        name="place2"
        onChange={(e)=>setplace2(e.target.value)}
    />
     <input
        type="text"
        placeholder="address"
        name="address"
        onChange={(e)=>setaddress(e.target.value)}
    />
     
            {/* {err && err} */}
            <button onClick={handleAddBook}>ADD Book</button>
    </form>
    </div>
   
        
    </>
  )// idimage,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address
}

export default Site;