import './assets/style/main.scss'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { QuoteIndex } from './pages/quote-index'
import { Docs } from './pages/docs'

export default function App() {

  return (
    <>
      <Router>
        <section className="main-layout">
          <Header></Header>
          <main>
            <Routes>
              <Route element={<QuoteIndex />} path="/" />
              <Route element={<Docs />} path="/docs" />
            </Routes>
          </main>
          <Footer></Footer>
        </section>
      </Router>
    </>
  )
}
