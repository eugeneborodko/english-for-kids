import Layout from './../../components/Layout/Layout'
import TrainCardsContainer from './../../components/TrainCardsContrainer/TrainCardsContainer'

const Category = ({ data }) => {
  return (
    <Layout>
      <TrainCardsContainer data={data} />
    </Layout>
  )
}

export default Category

Category.getInitialProps = async ({ query }) => {
  const response = await fetch(
    `http://localhost:3000/api/data/${query.categoryName}`,
  )
  const data = await response.json()

  return {
    data,
  }
}
