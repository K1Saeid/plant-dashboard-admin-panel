import React from 'react'
import "./Listing.css"
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

// imported icons =============>

// imported Image =============>
import img from '../../../Assets/image (6).png'
import img2 from '../../../Assets/image (7).png'
import img3 from '../../../Assets/image (5).png'
import img4 from '../../../Assets/image (4).png'
import img5 from '../../../Assets/admin-user-icon-4.gif'


function Listing() {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My listing</h1>
        <button className='btn flex'>
           See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer">

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img} alt='Image Name' />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img2} alt='Image Name' />
          <h3>Coffe Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img3} alt='Image Name' />
          <h3>Button Plant</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img4} alt='Image Name' />
          <h3>Spider Plant</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
              <button className='btn flex'>
            See All <BsArrowRightShort className='icon' />
              </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img5} alt="User Imgae" />
              <img src={img5} alt="User Imgae" />
              <img src={img5} alt="User Imgae" />
              <img src={img5} alt="User Imgae" />
            </div>

            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className='date'>7 Days</span>

                </small>
              </span>

            </div>
              
            
          </div>
        </div>

        <div className="featureSellers">
          <div className="heading flex">
            <h3>featured Sellers</h3>
              <button className='btn flex'>
            See All <BsArrowRightShort className='icon' />
              </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img5} alt="User Imgae" />
              <img src={img5} alt="User Imgae" />
              <img src={img5} alt="User Imgae" />
              <img src={img5} alt="User Imgae" />
            </div>

            <div className="cardText">
              <span>
                28.556 Plant sold <br />
                <small>
                  26 Sellers <span className='date'>31 Days</span>

                </small>
              </span>

            </div>
              
            
          </div>
        </div>
      </div>

     

    </div>
  )
}

export default Listing