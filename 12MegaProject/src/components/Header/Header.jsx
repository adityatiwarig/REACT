import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()    // BTN PE CLICK KRTE HI ROUTE CHANGE 

  const navItems = [        // ARRAY CONTAIN KRELA
    {
      name: 'Home',        // ISKO EK BTN SMJHO JISKO DBATE HI ROUTE BDL JAYE
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,     // JB USER LOGGED IN HO TB YE DONO KHULE NHI 
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,     // USER LOGIN HO TB HU SHOW KRO
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>       
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>     // AGR ACTIVE HAI TBHI
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}   // UUSKE ROUTE PE JAO
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (          // YE TBHI SHOW KRO JB USER LOGGED IN HO
              <li>
                <LogoutBtn />   
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header