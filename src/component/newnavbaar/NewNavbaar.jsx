import React from 'react'
import "./new_navbaar.css"

const Newnavbaar = () => {
  return (
    <div className='new_nav'>
        <div className="nav_data">
            <div className="left_data">
                 <p>All</p>
                 <p>mobile</p>
                 <p>bestseller</p>
                 <p>fashion</p>
                 <p>customer Services</p>
                 <p>Electronics</p>
                 <p>Prime</p>
                 <p>Today's deals</p>
                 <p>Amazon Pay</p>
            </div>
            <div className="right_data">
                <img src="./nav.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Newnavbaar