import axios from "axios";



function Personal_area(){
    async function bringuser(){
        try {
            const res = await axios.get("http://localhost:4000/trip/1");
            // navigate("/login")
            console.log(res.data)
        } catch (err) {
            //   setErr(err.response.data?.message);

        }
    }
    return<>
    <div>hello </div>
    <button onClick={bringuser}></button></>
}
export default Personal_area;