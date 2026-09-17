import { AppRouter } from './components/approuter';
import Footer from './components/footer';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="app-main">
        <AppRouter />
      </main>
      <Footer />
    </div>

  )
}

export default App
