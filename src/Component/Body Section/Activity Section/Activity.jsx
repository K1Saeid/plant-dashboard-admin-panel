import React from 'react'
import './Activity.css'

//Imported Icons ==============>
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Imgages =========>
import user from '../../../Assets/admin-user-icon-4.gif'


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>
      
      	<div className="setContainer grid">
          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Saeid Abdollahi</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Saeid Abdollahi</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Saeid Abdollahi</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Saeid Abdollahi</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Saeid Abdollahi</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
          </div>

        </div>

    </div>
  )
}

export default Activity