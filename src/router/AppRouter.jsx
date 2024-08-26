import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/*" element={<HeroesRoutes/>}></Route>
    </Routes>
    </>
  )
}
