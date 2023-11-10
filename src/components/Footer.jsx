import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
        <div className='websites' style={{width:'400px'}}>
          <h4 className='mb-3'>
          <i class="fa-solid fa-video fa-beat-fade" style={{color:'#a9da3e'}} ></i> video-player
          </h4>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsum nulla placeat reiciendis atque iure! Amet eius ipsam quasi sed praesentium impedit, reiciendis voluptatem earum, perspiciatis cupiditate, tempore sunt qui.</h6>
          <h6>fbbfb,cjijiec,cejjc</h6>
        </div>
        <div className='links d-flex flex-column'>
          <h4 className='mb-3'>links</h4>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/watchHistory'} style={{textDecoration:'none', color:'white'}}>watch History</Link>



        </div>
        <div className='guides d-flex flex-column'>
          <h4 className='mb-3'>guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}} >React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}} >React Bootstarp</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}} >Bootswatch</Link>
        </div>

        <div className='contact d-flex flex-column'>
          <h4 className='mb-3'>contact us</h4>
          <div className='d-flex mb-2'>
            <input type="text" className='form-control' placeholder='enter email id' />
            <button className='btn btn-warning ms-2'>suscribe</button>
          </div>

          <div className="d-flex justify-content-evenly align-items-center mt-4">
        <Link to={'/'} style={{textDecoration:'none',color:'white'}} ><i class ="fa-brands fa-twitter fa-2x" ></i></Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}} ><i class ="fa-brands fa-instagram fa-2x" ></i></Link>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}} ><i class ="fa-brands fa-linkedin fa-2x" ></i></Link>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}} ><i class ="fa-brands fa-facebook fa-2x" ></i></Link>

        </div>
        </div>
      </div>
    <p className='mt-5'>copyright © 2023 media player. build with react </p>
      </div>
  )
}

export default Footer