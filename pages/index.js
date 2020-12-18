import Layout from './../components/Layout/Layout'
import CardsContainer from './../components/CardsContainer/CardsContainer'

const HomePage = ({ data }) => {
  return (
    <Layout title="Main Page">
      <div className="container container_big">
        <CardsContainer data={data} />
      </div>
    </Layout>
  )
}

HomePage.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/data')
  const data = await response.json()

  return {
    data: data,
  }
}

export default HomePage
