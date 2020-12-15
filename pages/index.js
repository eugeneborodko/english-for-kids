import Header from './../components/Header/Header'
import CardsContainer from './../components/CardsContainer/CardsContainer'

const HomePage = ({ data }) => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <main className="main">
        <div className="container container_big">
          <CardsContainer data={data} />
        </div>
      </main>
    </>
  )
}

HomePage.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/data')
  const data = await response.json()

  return {
    data: data.cards,
  }
}

export default HomePage
