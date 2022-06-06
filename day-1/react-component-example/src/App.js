import Header from './Header'
import Content from './Content'
import Footer from './Footer'
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
