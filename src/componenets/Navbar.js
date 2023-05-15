import './NavbarStyle.css'
import { MenuItems } from './MenuItems'
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <>
        <nav className='NavbarItems'>
        <a href='/'>
        <h1 className='navbar-logo'>
            Dream TD
          </h1>
        </a>
          <div className='menu-icon' onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                
                </li>
                
              )
            })}
             <Link to='/singup'>
             <button className='btn'>Sign Up</button>
             </Link>
          </ul>
          
        </nav>
      </>
    )
  }
}

export default Navbar;
