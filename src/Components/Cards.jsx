
import React, { useContext } from 'react'

import { FaTrash } from 'react-icons/fa'

import { themeContext } from '../App'

const Cards = ({ text,date , handleDelete , id}) => {

	const dark  = useContext(themeContext)[0]

	return (
		<div className={`w-[400px] h-[200px] bg-[#fff57f] p-5 flex flex-col rounded-md ${ dark ? 'shadow-lg shadow-gray-500' : 'shadow-lg shadow-gray-300'}`}>
			<div className='grow text-lg'>
				{ text }
			</div>
			<div className='flex justify-between'>
				<p>{ date }</p>
				<FaTrash className='cursor-pointer' onClick={()=> handleDelete(id)}/>
			</div>
		</div>
	)
}

export default Cards
