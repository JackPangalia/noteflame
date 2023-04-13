import Login from "./components/Login"
import WriteNote from "./components/WriteNote"

const Home = () => {
  return (
    <>
      <Login isShown = {true}/>
      <WriteNote />
    </>
  )
}

export default Home