import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Secrtery = () => {
    
    const [num_of_turist, setnum_of_turist] = useState("")
    const [ages, setages] = useState("")
    const [children, setchildren] = useState("")
    const [discription, setdiscription] = useState("")
    const [time_it_takes, settime_it_takes] = useState("")
    const [accible, setaccible] = useState("")
    const [address, setaddress] = useState("")
    const [place1, setplace1] = useState("")
    const [place2, setplace2] = useState("")
    const [url, seturl] = useState("")
    const [name, setname] = useState("")
    const [constrainsId, setconstrainsId] = useState("")
    const [err, setErr] = useState(null);
    const navigate = useNavigate()

    // useEffect(() => {
    //     console.log("we")
    //      const fetchData=async()=> {
    //         try {      
    //             const res = await axios.post("http://localhost:4000/api/auth/login");
    //             console.log(res)
    //             localStorage.setItem("token", JSON.stringify(res.data.accessToken));
    //             // navigate("/Personal area/Personal_area")
    //           } catch (err) {
    //             // setErr(err.response.data?.message);
    //           }

    //       }
    //       fetchData()



    //   }, []);


  
    const handleAddSite = async (e) => {
        try {
            const res = await axios.post("http://localhost:4000/site", { name, num_of_turist, ages, children, discription, time_it_takes, accible, place1, place2, address ,url});
            // navigate("/login")
            console.log(res.data)
        } catch (err) {
            //   setErr(err.response.data?.message);

        }
    };
    //if(!categories.length || ! autours.length) return <h1>LOADING....</h1>
    return (
        <>
            <div className="new-book">



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
                    placeholder="num_of_turist"
                    name="num_of_turist"
                    onChange={(e) => setnum_of_turist(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="ages"
                    name="ages"
                    onChange={(e) => setages(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="children"
                    name="children"
                    onChange={(e) => setchildren(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="discription"
                    name="discription"
                    onChange={(e) => setdiscription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="time_it_takes"
                    name="time_it_takes"
                    onChange={(e) => settime_it_takes(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="accible"
                    name="accible"
                    onChange={(e) => setaccible(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="place1"
                    name="place1"
                    onChange={(e) => setplace1(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="place2"
                    name="place2"
                    onChange={(e) => setplace2(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="address"
                    name="address"
                    onChange={(e) => setaddress(e.target.value)}
                />
               
                {err && err}
                <button onClick={handleAddSite}>ADD site</button>
                <input
                    type="text"
                    placeholder="url"
                    name="url"
                    onChange={(e) => seturl(e.target.value)}
                />


            </div>


        </>
    )// idimage,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address
}

export default Secrtery;