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

Category.getInitialProps = async (ctx) => {
  let host = ''

  if (ctx.req) {
    host = `${ctx.req?.connection.encrypted ? 'https://' : 'http://'}${
      ctx.req.headers.host
    }`
  }

  const req = await fetch(`${host}/api/data/${ctx.query.categoryName}`)
  const data = await req.json()

  return {
    data,
  }
}
