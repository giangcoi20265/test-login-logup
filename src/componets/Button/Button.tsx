import React from 'react'

type Props = {}

const Button= ({lable}) => {
    const onclick =()=>{
        alert("anh đông đẹp trai vãi ò")
    }
  return (
    <button onClick={onclick} className='bg-red-300 rounded'>
        {lable}
    </button>
  )
}

export default Button