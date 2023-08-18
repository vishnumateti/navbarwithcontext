// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navClassName = isDarkTheme ? 'nav-container-dark' : 'nav-container'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const homeText = isDarkTheme ? 'home-text-light' : 'home-text'

      const lightTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <div>
          <nav className={navClassName}>
            <img className="website-logo" alt="website logo" src={imageUrl} />
            <ul className="home-about-options-container">
              <li className="list-container">
                <Link className="link" to="/">
                  <h1 className={homeText}>Home</h1>
                </Link>
              </li>
              <li className="list-container">
                <Link className="link" to="/about">
                  <h1 className={homeText}>About</h1>
                </Link>
              </li>
            </ul>
            <button
              className="button"
              type="button"
              onClick={changeTheme}
              data-testid="theme"
            >
              <img className="website-logo" alt="theme" src={lightTheme} />
            </button>
          </nav>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
