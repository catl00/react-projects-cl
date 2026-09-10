import Navigation from './components/navigation.jsx'
import LoginSignup from './components/login-signup.jsx'
import Order from './components/order.jsx'
import Home from './components/home.jsx'
import Menu from './components/menu.jsx'

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <LoginSignup show={false} close={() => {}} />
      {/* <Order/> */}
      {/* <Home /> */}
      <Menu />
    </>
  )
}

export default App
