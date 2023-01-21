import React from 'react'
import Navbar from './Navbar'
import avatar from "../assets/avatar.svg"

const Header = () => {
  return (
	<header className='site__header'>
		<div>
			<h1 className='logo'>MALA <span>Social media</span></h1>
		</div>
		<Navbar />
		<div className='profile__header'>
			<img className='avatar__header' src={avatar} alt="Avatar picture" />
			<p>Arandano Depresivo</p>
		</div>
	</header>
  )
}

export default Header