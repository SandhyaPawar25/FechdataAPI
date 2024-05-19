import axios from "axios"
import {useEffect, useState} from "react"
import style from "./fetchdata.module.css"
let FetchData2=()=>{

    let [users,setData]=useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then((Response)=>{setData(Response.data);})
        .catch(()=>{console.log("errrrr");})

   },[])
    return(
        <div id={style.userpage}>
{users.map((user)=>{
    let sendRequest=()=>{
        alert("friend request sent sucessfully {user.login}")
    }
    return(
        <div>
        <h1> {user.login}</h1>
        <img src={user.avatar_url} alt="" />
        <h1> {user.login}</h1>
        <h3> facebook</h3>
        <p>leom ipsum dolor ,sit amet consectetur
         adioisicing</p>
         <button onClick={sendRequest}>Add friend</button>
         <button>massage</button>
         </div>
    )

})}
        </div>
    )
}
export default FetchData2