import React from 'react'

const Users = (props) => {
  return (
    <div className='bg-black text-white'>
      {props.elem.fullName}
    </div>
  )
}

export default Users
