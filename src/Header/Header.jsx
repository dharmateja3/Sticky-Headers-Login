import React from 'react'

const Header = () => {
  return (
    <div className='sticky-top'>
        <div className='d-flex justify-content-center' style={{'height':60, 'backgroundColor':'blue'}}>
            <h3 className='d-flex align-items-center text-light'>Header</h3>
        </div>
    </div>
  )
}

export default Header