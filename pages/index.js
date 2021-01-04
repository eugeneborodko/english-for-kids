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

HomePage.getInitialProps = async (ctx) => {
  let host = ''

  if (ctx.req) {
    host = `${ctx.req?.connection.encrypted ? 'https://' : 'http://'}${
      ctx.req.headers.host
    }`
  }

  const req = await fetch(`${host}/api/data`)
  const data = await req.json()

  return {
    data: data,
  }
}

export default HomePage
