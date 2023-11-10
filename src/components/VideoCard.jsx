import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addtoHistory, deleteAVideo } from '../services/allAPI';

function VideoCard({display, deleteVid}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async()=>{
    setShow(true)
    const {caption, youTubeLink} = display
    const today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);
  
    let videodetails = {
      caption,youTubeLink,timestamp
    }
    const response =await addtoHistory(videodetails)
    console.log(response);
  }

 const removeVideo = async (id)=>{
  const response = await deleteAVideo(id)
  deleteVid(false);
 }
  
  //fn to drag a particular card
  const dragCard = (e,id)=>{
    console.log(`card that dragged is: ${id}`);
    // to transfer id from video
    e.dataTransfer.setData("videoID",id)
 }

 
  return (
    <div>
         <Card style={{ width: "100%" }} className='mt-3' draggable onDragStart={(e)=>dragCard(e,display?.id)}>
            <Card.Img onClick={handleShow} variant="top" src={display.url}/>
            <Card.Body className='d-flex justify-content-evenly '>
                <Card.Title><h6>{display.caption}</h6></Card.Title>
                <Button onClick={()=>{removeVideo(display.id)}} variant="primary"><i class="fa-solid fa-trash"></i></Button>
            </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{display.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315"  src={`${display.youTubeLink}?autoplay=1`} title={display.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
    
      </Modal>
    </div>
  )
}

export default VideoCard