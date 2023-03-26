
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ handleSearch }) => {
	return (
		<div>
			<div className='flex items-center mt-5 bg-[#e6e6e6] border-2 border-gray-300 pl-3 rounded-md'>
				<FaSearch className='mr-3 border-r-2'/>
				<input type="text" placeholder='Search...' className='pl-3 py-1 w-full bg[#e6e6e6] rounded-r outline-none' onChange={handleSearch}/>
			</div>
		</div>
	)
}

export default Search
