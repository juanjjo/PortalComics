import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { MarvelPage } from "../pages/MarvelPage"
import { DcPage } from "../pages/DcPage"
import { SearchPage } from "../pages/SearchPage"
import { HeroesPage } from "../pages/HeroesPage"

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="px-20">
    <Routes>
        <Route path="marvel" element={<MarvelPage></MarvelPage>}></Route>
        <Route path="dc" element={<DcPage></DcPage>}></Route>
        <Route path="search" element={<SearchPage></SearchPage>}></Route>
        <Route path="hero/:id" element={<HeroesPage></HeroesPage>}></Route>
        <Route path="/" element={<Navigate to="/marvel"></Navigate>}></Route>
    </Routes>
    </div>

    </>
  )
}
