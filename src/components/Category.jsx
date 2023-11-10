import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addToCategory, deleteCat, getAllCategory, getIdVideo, updateCate } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap'


function Category() {


  const [show, setShow] = useState(false)
  const [CategoryName, setCategoryName]= useState("")
  const [cate,setCate]= useState([])
  const handleClose = () =>setShow(false)
  const handleShow = ()  =>setShow(true)

  //function to add category
  const handleCat = async()=>{
    console.log(CategoryName);
     if(CategoryName)
    {
      let body={
        CategoryName,
        allvideoes:[]
      }
      const response=await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){

        toast.success("Category added Suceesfully")
        allCategory()

        // to empty the state
        setCategoryName('')
        // close model
        handleClose()
      }
      else{
        toast.error("Something went wrong please try again later");
      }
    }
    else
    {
      toast.warning("please fill the category name")
    }
    
  } 

  //function to get all category
  const allCategory = async()=>{
    const {data} = await getAllCategory()
    setCate(data)
  }
  
  //delete function for category
/*     console.log(data);
 */
/* setCategoryName(data)   */

  console.log(CategoryName);
  useEffect(()=>{
    allCategory()
  },[])

  // function to remove category
const removeCat = async(id)=>{
  await deleteCat(id)
  allCategory()
} 
  const dragOver = (e)=>{
    e.preventDefault()
  }

  // function to drop video card to category
  const VideoDrop = async (e,id)=>{
    console.log(`Category in which card is dropped:${id}`);
   let videoID= e.dataTransfer.getData("videoID")
   console.log(videoID);
  // api to get a video
  const {data}= await getIdVideo(videoID)
  console.log(data);

  let selectCate = cate.find((item)=>item.id===id)
  selectCate.allvideoes.push(data)

  console.log(selectCate);
  await updateCate(id,selectCate)
   
  allCategory()
  }

  

  

  return (
    <>
    <div className="d-flex justify-content-between align-items-center">
          <button onClick={handleShow} className='btn btn-warning d-flex justify-content-between align-items-center'>add new category</button>
        </div>
    <div>
      {
        cate?.length>0?
        cate.map((item)=>(<div className="m-5 border border-secondary p-3 rounded" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>VideoDrop(e,item?.id)}>
        <div className="d-flex justify-content-between align-items-center">
          <h6>{item.CategoryName}</h6>
          <button onClick={()=>{removeCat(item?.id)}} className="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <Row>
          <Col>
          {
            item?.allvideoes.length>0?
            item?.allvideoes.map((card)=>(<VideoCard display={card}/>))

            :<p>Nothing To Display</p>
          }


          </Col>
          </Row>

      </div>)):<p>Nothing To Display</p>
      }
      
    <Modal show={show}
        onHide={handleClose}>
        
        {/* backdrop="static"
        keyboard={false} */}
      
        <Modal.Header closeButton>
          <Modal.Title>add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form  className='border border-secondary p-3 rounded'>

         <Form.Group className="mb-3"  controlId="formBasicEmail">
            <Form.Control type="text" onChange={(e)=>setCategoryName(e.target.value)} placeholder="Enter category name" />
           </Form.Group>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCat}> add</Button>
        </Modal.Footer>
      </Modal>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Category