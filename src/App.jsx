import { useState , createContext, useEffect } from 'react'
import'./App.css'

import Header from './Components/Header'
import Search from './Components/Search'
import CardLayout from './Components/CardLayout'

import { nanoid } from 'nanoid'

export const themeContext = createContext()

function App() {

	const [dark,setDark] = useState(false)


	const [notes, setNotes] = useState([
		{
			id : nanoid(),
			text : "This is my first note",
			date :  (new Date()).toLocaleDateString()
		}
	])

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		)
	},[notes])

	useEffect(()=>{
		const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
		if (savedNotes)
		{
			setNotes(savedNotes)
		}
	},[])
	

	const [search, setSearch] = useState('')

	const handleSave = (text) => {
		const newNote = {
			id : nanoid(),
			text : text,
			date : (new Date()).toLocaleDateString()
		}
		setNotes([...notes,newNote])
	}

	const handleDelete = (id) => {
		setNotes(notes.filter((note)=> note.id !== id))
	}

	const handleSearch = (event) => {
		setSearch(event.target.value)
	}

	return (
		<themeContext.Provider value={[dark , setDark]}>
			<div className={ `App p-9 min-h-screen ${ dark ? 'bg-gray-900' : ''}` }>
				<Header/>
				<Search handleSearch = { handleSearch }/>
				<CardLayout search={ search } notes = { notes } handleSave={ handleSave } handleDelete = { handleDelete }/>
			</div>
		</themeContext.Provider>
	)
}

export default App
