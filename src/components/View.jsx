import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {
  const [videos, setVideos] =useState([])
  const [deleteStatus,setDeleteStatus]=useState(true)

  const getAllUploadedVideos = async ()=>{
    const response = await getAllVideos()
    const {data}  = response
     setVideos(data)
  }
  
  useEffect(()=>{
    getAllUploadedVideos();
    setDeleteStatus(true)
  },[uploadVideoStatus , deleteStatus ])
  return (
    <div>
        <Row>
           {videos.length>0?
           videos?.map((allvideos)=>(
            <Col sm={12} md={6} lg={4} xl={3} >
            <VideoCard display={allvideos} deleteVid ={setDeleteStatus}/>
            </Col>
           )):
          <p>nothing to display</p> }
        </Row>
    </div>
  )
}

export default View