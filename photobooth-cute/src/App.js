import './App.css';
import './Styles/Photobooth.css';
import Photobooth from './Components/Photobooth';

const logoSRC = "/Assets/logo/CL-logo.png";

function App() {
  return (
    <div className="App" style={{
      minHeight: "100vh",
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
    }}>
      <div style ={{
        width: "100%",
        maxWidth: 1200,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 20px",
      }}>
        <img src={logoSRC} alt="cl-logo" style={{width: 100}} />
        <h1 style={{
          fontFamily: "sans-serif",
          color: "rgba(76, 150, 196, 1)",
          margin: 0,
          fontSize: 48
        }}>CL Photobooth</h1> 
      </div>

      <div style={{
        flex: 1,
        width: "100%",
        display:"flex", 
        justifyContent: "center", 
        alignItems: "center",
        paddingBottom: "40px"
      }}>
        <Photobooth />
      </div>

    </div>
  );
}

export default App;
