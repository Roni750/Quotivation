import './assets/style/main.scss'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'

export default function App() {

  return (
    <>
      <Router>
        <Header></Header>
      </Router>
      <Footer></Footer>
    </>
  )
}
