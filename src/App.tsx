import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import './App.css'
import Form from './components/Form'
import PacientsList from './components/PacientsList'

function App() {


  return (
    <>
      <div className='container mx-auto mt-20'>
        <h1 className=' font-black text-5xl text-center md:w-2/3 md:mx-auto'>
          Seguimiento de Pacientes {''}
          <span className='text-[#790252]'>Veterinaria</span> {''}
          <span className=' font-bold text-2xl'>v2</span>
        </h1>

        <div className='mt-12 md:flex'>

          <Form />
          <PacientsList />
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
