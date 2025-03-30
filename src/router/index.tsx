import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"


const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout /> }>
            <Route index element={<Home />} />
            <Route />
            <Route />
        </Route>
      </Routes>
    </>
  )
}

export default index
