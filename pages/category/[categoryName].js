import Layout from './../../components/Layout/Layout'
import FlipCardsContainer from './../../components/FlipCardsContrainer/FlipCardsContainer'

const Category = ({ data }) => {
  return (
    <Layout>
      <FlipCardsContainer />
    </Layout>
  )
}

export default Category

Category.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:3000/api/data/${query.categoryName}`)
  const data = await response.json()

  return {
    data
  }
}