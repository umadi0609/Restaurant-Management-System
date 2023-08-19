import axios from 'axios'
import { ReviewDB } from '../DB/Review'


//Review Post Api
export const ReviewPost=(data)=>{
    axios.post("http://127.0.0.1:3000/api/feedback",{
    headers:{"Content-type": "application/json; charset=UTF-8",}},
    {data:data})
        .then(res=>{
            if(res.status==200){
                //Update Review Storage
                ReviewDB.push(data)
            }
        }) 
        .catch(err=>console.log(err))
}