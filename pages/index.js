import Header from './../components/Header/Header'
import CardsContainer from './../components/CardsContainer/CardsContainer'

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <main className="main">
        <div className="container container_big">
          <CardsContainer />
        </div>
      </main>
    </>
  )
}

export default HomePage
