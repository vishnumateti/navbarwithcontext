// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'bg-container-dark' : 'bg-container-lt'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeText = isDarkTheme ? 'home-text-light' : 'home-text'
      return (
        <div className={bgClassName}>
          <Navbar />

          <div className="home-container">
            <img className="home-image" alt="home" src={imageUrl} />
            <h1 className={homeText}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
