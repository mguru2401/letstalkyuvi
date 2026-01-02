import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Episodes } from './components/Episodes'
import { Topics } from './components/Topics'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { LookingForSpecific } from './components/LookingForSpecific'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Episodes />
        <Topics />
        <Newsletter />
        <LookingForSpecific />
      </main>
      <Footer />
    </div>
  )
}

export default App
