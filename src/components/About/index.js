// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'bg-container-dark' : 'bg-container-lt'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutText = isDarkTheme ? 'about-text-light' : 'about-text'
      return (
        <div className={bgClassName}>
          <Navbar />

          <div className="about-container">
            <img className="about-image" alt="about" src={imageUrl} />
            <h1 className={aboutText}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
