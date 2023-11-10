import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const [dataStore, setDataStore] = useState({
    id:'',
    caption:'',
    url:'',
    youTubeLink:''
  })

    console.log(dataStore);

    const embedVideoLink =(e)=>{
      const {value} = e.target
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setDataStore({...dataStore,youTubeLink:link})
    }

  const handleUpload= async()=>{
    const {id,caption,url,youTubeLink} = dataStore
    if(id,caption,url,youTubeLink){
      const response = await uploadAllVideo(dataStore)
      console.log(response);
      if(response.status>=200 && response.status<300){
        setUploadVideoStatus(response.data)
         toast.success(`${response.data.caption} is successfully uploaded`)
         handleClose()
         setDataStore({
          id:'',
          caption:'',
          url:'',
          youTubeLink:''
         })
      }else{
        toast.error('something went wrong')
      }
    }else{
      toast.warning('please fill all the fields')
    }
  }

  return (
    <div>
      <h3 style={{border:'1px solid ',padding:'15px'}} className='rounded'>Upload New Video {' '}
      <button className='btn' onClick={handleShow}> <i class="fa-solid fa-upload"></i></button></h3>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{color:"#00A9FF"}}><i class="fa-solid fa-file-video"></i>{' '}Upload Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please fill the form</p>
        <form >

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" onChange={(e)=>setDataStore({...dataStore,id:e.target.value})} placeholder="Enter Video Id" />
           </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" onChange={(e)=>setDataStore({...dataStore,caption:e.target.value})} placeholder="Enter Video Caption" />
           </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" onChange={(e)=>setDataStore({...dataStore,url:e.target.value})} placeholder="Enter Video Image Url" />
           </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text"  placeholder="Enter YouTube Video Link" onChange={(e)=>{embedVideoLink(e)}} />
           </Form.Group>

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary"  onClick={handleUpload}>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
     <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </div>
    
  )
}

export default Add


//<iframe width="560" height="315" src="https://www.youtube.com/embed/7RRVs6vbr1M?si=zaCzZRa4lfPONZeX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>