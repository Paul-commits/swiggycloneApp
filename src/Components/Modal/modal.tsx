import React from 'react'
import { ModalProps } from '../../Types/Interface'

const Modal : React.FC<ModalProps> = ({ children, onClose})  => {
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50'>
        <div className='absolute top-0 right-0 bg-white h-full shadow-lg transform transition-transform ease-in-out'>
            {children}
            <button 
              className="absolute top-4 left-8 text-gray-500 hover:text-black text-lg focus:outline-none"
              onClick={onClose}>X
            </button>
        </div>
    </div>
  )
}


export default Modal