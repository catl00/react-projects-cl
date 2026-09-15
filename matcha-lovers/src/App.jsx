import { AppRouter } from './components/AppRouter.jsx'
// import AppNavbar from './components/AppNavBar.jsx'
import Navigation from './components/navigation.jsx'

function App() {
  return (
    <div className='app-container'>
      <Navigation /> 
      <AppRouter />
    </div>
  )
}

export default App
