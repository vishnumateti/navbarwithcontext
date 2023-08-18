// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'bg-container-dark' : 'bg-container-lt'
      return (
        <div className={bgClassName}>
          <Navbar />

          <div className="not-found-container">
            <img
              className="not-found-image"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
            />
            {isDarkTheme ? (
              <div>
                <h1 className="lost-text-light">Lost Your Way</h1>
                <p className="lost-text-light">
                  We cannot seem to find the page
                </p>
              </div>
            ) : (
              <div>
                <h1 className="lost-text">Lost Your Way</h1>
                <p className="lost-text">We cannot seem to find the page</p>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
