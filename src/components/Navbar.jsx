import React from 'react'
import { header } from '../assets/images/special'
import {About, Beardle, Contact, Landing, Members} from '.'
import {Link} from "react-router-dom"
import { textVariant } from '../utils/motion'
import {motion} from 'framer-motion'
import { styles } from '../styles'
const Navbar = () => {
  return (
    <>
      <nav className=' '>
      <div className='header-container' to>
    
      <ul className='link-stuff '>
        
      <li className='links '>
            <Link to="/articles" className=' page-link max-xs:text-[10px]'>
            Articles
           
            </Link>
           
          </li>
         
        
          
        
          <li className='links'>
            <Link to="/members" className='  page-link max-xs:text-[10px]'>
            Members
            </Link>
          </li>
        <Link to="/about" className='mt-5'>
         
            <img src={header} className='header mt-[0px] border-b-2 border-grey'/>
        
        </Link>
        <li className='links '>
            <Link to="/contact" className='  page-link max-xs:text-[10px]'>
              Contact
            </Link>
          </li>
          <li className='links'>
          <Link to="/beardle" className='  page-link max-xs:text-[10px]'>
            Beardle
            </Link>
          </li>
       
        </ul>
        </div>
   
        <div className='line'/>
      
      
        
   
      </nav>
    </>
    
  )
}

export default Navbar