import './assets/style/main.scss'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { QuoteIndex } from './pages/quote-index'
import { Docs } from './pages/docs'
import { DocsRandom } from './pages/docs/docs-random'
import { DocsByAuthor } from './pages/docs/docs-by-author'
import { DocsBatchQuotes } from './pages/docs/docs-batch'
import { DocsGetById } from './pages/docs/docs-id'

export default function App() {

  return (
    <>
      <Router>
        <section className="main-layout">
          <Header></Header>
          <main>
            <Routes>
              <Route path="/" element={<QuoteIndex />} />
              <Route path="/docs" element={<Docs />} >
                <Route path="random" element={<DocsRandom />} />
                <Route path="author" element={<DocsByAuthor />} />
                <Route path="batch" element={<DocsBatchQuotes />} />
                <Route path="getbyid" element={<DocsGetById />} />
              </Route>
            </Routes>
          </main>
          <Footer></Footer>
        </section>
      </Router>
    </>
  )
}
