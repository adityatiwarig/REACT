import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { 
          name: 'Home',
          slug: '/',
          active: true,
    },

    {
         name: 'Login',
         slug: '/login',
         active: !authStatus,
    },

    {
        name: 'Signup',
        slug: '/signup',
        active: !authStatus,
    },


    {
         name: 'All Posts', 
         slug: '/all-posts', 
         active: authStatus,
    },


    { 
        name: 'Add Post',
        slug: '/add-post',
        active: authStatus,
    },
  ];

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/">
            <Logo width="40px" />
          </Link>

          {/* Navigation */}
          <ul className="flex gap-4 items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="text-gray-700 hover:text-blue-500 font-medium px-3 py-1 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
