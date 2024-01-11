import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-darkblue">
      <div className="bg-white dark:bg-dark rounded-b-[24px] xl:rounded-b-[40px]">
        <div className="container">
          <Header />
          <div className="pb-20 xl:pb-[120px]">
            <Hero />
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  )
}

export default App
