import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteHistory, getAllHistory } from '../services/allAPI';


function WatchHistory() {
  const [history,setHistory] = useState([ ])

    const watchHistory = async()=>{
    const {data} = await getAllHistory()
      console.log(data);
      setHistory(data)
    

  }
  console.log(history);
  useEffect(()=>{
    watchHistory()
  },[])

  //function to remove history
  const removeHis = async(id)=>{
    await deleteHistory(id)
    //to get the reaming history
    watchHistory()
  }

  return (
    <>
    <div className='container d-flex mt-5 justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/Home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'20px'}}>back to home</Link>
      </div>
      <table className='table m-5 mb-5 container'>
        <thead>
          <tr>
            <th >#</th>
            <th >caption</th>
            <th >url</th>
            <th >Time Stamp</th>
            <th >Action</th>
            
          </tr>
        </thead>
        <tbody>
        {history?.length>0?
        history?.map((item, index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.youTubeLink} target='_blank'> {item.youTubeLink}</a></td>
          <td>{item.timestamp}</td>
          <td><button onClick={()=>removeHis(item?.id)}><i class="fa-solid fa-trash fa-xl">{item.Action}</i></button></td>
        </tr>
        ))
        :<p>nothig to display</p>}
        </tbody>
        </table>
        </>
        
  )
}

export default WatchHistory