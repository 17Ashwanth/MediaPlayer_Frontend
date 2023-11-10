import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl =useNavigate()

  return (
    <>
    <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
    <Col></Col>

      <Col lg={5}>
        <h3>welcome to <span className='text-warning'>Video Player</span></h3>
        <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius reiciendis repellendus temporibus eligendi placeat, eveniet non quasi dolore debitis quos necessitatibus rerum veritatis porro quod fugiat Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusantium, vel corporis quisquam nesciunt libero culpa sequi autem magnam sunt itaque doloribus. Quod voluptas rem consequatur amet alias eveniet ad.excepturi ad minima.</p>
        <button className='btn btn-warning mt-5'> <a style={{textDecoration:'none', color:'white'}} href="/home">get started</a> <i class="fa-solid fa-arrow-right fa-beat" style={{color:'#ffffff'}}></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>  <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
</Col>
      <Col></Col>
    </Row>
    <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column'>
      <h3 className='mb-5'>Features</h3>
        <div className='cards d-flex justify-content-evenly align-items-center w-100 '>
        <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>managing video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorised video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>watch-history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    </div>
    <div className='container align-items-center d-flex border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 justify-content-between '>
      <Row>
        <Col lg={6}>

        <h3 className='text-warning mb-5'>Simple fast and PowerFull</h3>
        <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis reprehenderit repellat exercitationem molestiae tempora quo, possimus nihil, quibusdam tempore eligendi quisquam numquam! Consequuntur rerum perferendis voluptatem. Aperiam beatae quisquam inventore.</h6>
        <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis reprehenderit repellat exercitationem molestiae tempora quo, possimus nihil, quibusdam tempore eligendi quisquam numquam! Consequuntur rerum perferendis voluptatem. Aperiam beatae quisquam inventore.</h6>
        <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis reprehenderit repellat exercitationem molestiae tempora quo, possimus nihil, quibusdam tempore eligendi quisquam numquam! Consequuntur rerum perferendis voluptatem. Aperiam beatae quisquam inventore.</h6>
        </Col>
        <Col></Col>
        <Col lg={5}><img onClick={()=>navigateByUrl('/home')} src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" /></Col>
      </Row>
      </div>    
    </>
  )
}

export default LandingPage


