import React from "react";
function Show(res){
return <>
{res.map((e)=>{<div>{e}</div>})}
</>
}
export default Show;