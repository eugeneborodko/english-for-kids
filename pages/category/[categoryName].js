const Category = ({ data }) => {
  return (
    <div>{JSON.stringify(data)}</div>
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