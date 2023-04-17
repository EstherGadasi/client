import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Secrtery = () => {
    
    
    const [acces, setacces] = useState(false)
    const [bicycles, setbicycles] = useState(false);
    const [categories, setcategories] = useState([]);
    const [tripstype, settripstype] = useState([])
    const [description, setdescription] = useState(null);
    const [area, setarea] = useState([])
    const [truffic, settruffic] = useState(false)
    const [payment, setpayment] = useState(null)
    const [level, setlevel] = useState([])
    const [name, setname] = useState(null)
    const [place1, setplace1] = useState(null)
    const [place2, setplace2] = useState(null)
    const [adress, setadress] = useState(null)
    const [url, seturl] = useState(null)
  
    function check(event, set, arr) {
        if (event.target.checked){
            const newArray = [...arr, event.target.value]
            console.log(newArray)
       set(newArray);
        // console.log(arr)acces,bicycles,categories,tripstype,description,area,truffic,payment,level,name,place1,place2,url,adress
    }
        else
        {
        let arrcsh = arr;
        arrcsh.pop(event.target.value)
        set(
           [arrcsh]
            
        )}

    }
    async function addsite() {
       
        
        const handleAddSite = async (e) => {
            try {
                const res = await axios.post("http://localhost:4000/site", { acces,bicycles,categories,tripstype,description,area,truffic,payment,level,name,place1,place2,url,adress});
                // navigate("/login")
                console.log(res.data)
            } catch (err) {
                //   setErr(err.response.data?.message);
    
            }
        };
        handleAddSite()
    }
    return <>

        <button onClick={addsite}>addsite</button><br></br>
        
        <p>Please select your constrains</p>
        <input type={"text"} placeholder="payment" onChange={(e) => { setpayment(e.target.value) }}></input><br></br>

        <p>bicycles</p>
        <label for="false">false</label><br></br>
        <input type="radio" id="bicycles" name="bicycles" value="false" onChange={(e) => { setbicycles(e.target.value) }}></input><br></br>
        <label for="true">true</label><br></br>
        <input type="radio" id="bicycles1" name="bicycles" value="true" onChange={(e) => { setbicycles(e.target.value) }}></input><br></br>

        <p>truffic</p>
        <label for="false">false</label><br></br>
        <input type="radio" id="truffic" name="truffic" value="false" onChange={(e) => { settruffic(e.target.value) }}></input><br></br>
        <label for="true">true</label><br></br>
        <input type="radio" id="truffic1" name="truffic" value="true" onChange={(e) => { settruffic(e.target.value) }}></input><br></br>

        <p>acces</p>
        <label for="false">false</label><br></br>
        <input type="radio" id="acces" name="acces" value="false" onChange={(e) => { setacces(e.target.value) }}></input><br></br>
        <label for="true">true</label><br></br>
        <input type="radio" id="acces1" name="acces" value="true" onChange={(e) => { setacces(e.target.value) }}></input><br></br>

        <p>level</p>
        <input type="radio" id="level1" name="level" value="hard" onChange={(e) => { setlevel(e.target.value) }}></input><br></br>
        <label for="level1"> hard</label><br></br>
        <input type="radio" id="level2" name="level" value="easy" onChange={(e) => { setlevel(e.target.value) }}></input><br></br>
        <label for="level2"> easy</label><br></br>
        <input type="radio" id="level3" name="level" value="medium" onChange={(e) => { setlevel(e.target.value) }}></input><br></br>
        <label for="level3"> medium</label><br></br>
        <button type="submit">Submit form</button><br></br>

        <p>area</p>
        <input type="radio" id="area1" name="area" value="north" onChange={(e) => { setarea(e.target.value) }}></input><br></br>
        <label for="area1"> north</label><br></br>
        <input type="radio" id="area2" name="area" value="south" onChange={(e) => { setarea(e.target.value) }}></input><br></br>
        <label for="area2"> south</label><br></br>
        <input type="radio" id="area3" name="area" value="center" onChange={(e) => { setarea(e.target.value) }}></input><br></br>
        <label for="area3"> center</label><br></br>
        <input type="radio" id="area3" name="area" value="JerusalemSurroundingArea" ></input><br></br>
        <label for="area4"> JerusalemSurroundingArea</label>
        <button type="submit">Submit form</button><br></br>

        <p>tripstype</p>
        <input type="radio" id="tripstype1" name="tripstype" value="around" onChange={(e) => { settripstype(e.target.value) }}></input><br></br>
        <label for="tripstype1"> around</label><br></br>
        <input type="radio" id="tripstype2" name="tripstype" value="lines" onChange={(e) => { settripstype(e.target.value) }}></input><br></br>
        <label for="tripstype2"> lines</label><br></br>
        <input type="radio" id="tripstype3" name="tripstype" value="riding" onChange={(e) => { settripstype(e.target.value) }}></input><br></br>
        <label for="tripstype3"> riding</label><br></br>
        <button type="submit">Submit form</button><br></br>

        <p>categories</p>
        <input type="checkbox" id="categories1" name="categories1" value="families" onChange={(e) => { check(e, setcategories, categories)}}></input><br></br>
        <label for="categories1"> families</label><br></br>
        <input type="checkbox" id="categories2" name="categories2" value="groups" onChange={(e) => { check(e, setcategories, categories)}}></input><br></br>
        <label for="categories2"> groups</label><br></br>
        <input type="checkbox" id="categories3" name="categories3" value="pairs" onChange={(e) => { check(e, setcategories, categories)}}></input><br></br>
        <label for="categories3"> pairs</label><br></br>
        <input type="checkbox" id="categories3" name="categories4" value="children" onChange={(e) => { check(e, setcategories, categories)}}></input><br></br>
        <label for="categories4"> children</label><br></br>
        <button type="submit">Submit form</button> <br></br>

         <input type={"text"} placeholder="place1" onChange={(e) => { setplace1(e.target.value) }}></input><br></br>  
         <input type={"text"} placeholder="place2" onChange={(e) => { setplace2(e.target.value) }}></input><br></br> 
         <input type={"text"} placeholder="name" onChange={(e) => { setname(e.target.value) }}></input><br></br>
         <input type={"text"} placeholder="url" onChange={(e) => { seturl(e.target.value) }}></input><br></br>  
         <input type={"text"} placeholder="adress" onChange={(e) => { setadress(e.target.value) }}></input><br></br>  
        </>


  
   
   
}

export default Secrtery;