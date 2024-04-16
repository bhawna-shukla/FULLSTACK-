import React , {useState}from 'react'
import {enqueueSnackbar} from 'notistack'

const Eventhandling = () => {

  const [count, setCount] = useState(0)
  const handlebuttonClick =()=>{
    // alert('Button click')
    enqueueSnackbar('why are distrubing me')
  }
  const handleIncrement =() =>{
    setCount (count + 1)
  }
  const handleDecrement =()=>{
    setCount (countt - 1)
  }
  const handleReset =()=>{
    setCount(0)
  }
  return (
    <div>
        <h1>eventhandling example</h1>
        <button onClick={handlebuttonClick} className="btn btn-primary">Click here</button>
      <section className='mt-5'>
        <h1>Count Handling</h1>
         <h4>Number of count : {count}</h4>
         <div className='button-container'>
        
          <button  onClick={handleIncrement}className='btn btn-primary'>Increase</button>
          <button onClick={handleIncrement} className='btn btn-danger'>Decrease</button>
          <button onClick={handleReset} className='btn btn-warning'>Reset</button>

         </div>
      </section>
  
         </div>
  )
}

export default Eventhandling  