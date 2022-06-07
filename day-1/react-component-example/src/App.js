import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Content paragraphs={3} />
      <Footer />
    </div>
  )
}

export default App
