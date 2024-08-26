import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";
import 'animate.css';
export const HeroesPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const hero = useMemo(()=> getHeroById(id),[id]) ;
  const onNavigateBack = ()=>{
    navigate(-1);
  }
  if(!hero){
    return <Navigate to={"/marvel"}></Navigate>
  }
  return (
    <>
     <div className="flex flex-col justify-center h-screen">
  <div
    className="relative flex flex-col md:flex-row md:space-x-5 
    space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border
     border-white bg-white animate__animated animate__fadeInLeft">
    <div className="w-full md:w-1/3 bg-white grid place-items-center">
      <img src={`/assets/heroes/${id}.jpg`} alt="not found" className="rounded-xl" />
    </div>
    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
      <div className="flex justify-between item-center">
        <p className="text-gray-500 font-medium hidden md:block">Heroe</p>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-gray-600 font-bold text-sm ml-1">
            4.96
            <span className="text-gray-500 font-normal">(76 reviews)</span>
          </p>
        </div>
        <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
          {hero.publisher}</div>
      </div>
      <h3 className="font-black text-gray-800 md:text-3xl text-xl">{hero.superhero}</h3>
      <p className="md:text-lg text-gray-500 text-base"><span><strong>Alter ego: </strong></span>{hero.alter_ego}</p>
      <p className="md:text-lg text-gray-500 text-base"><span><strong>First aparence: </strong></span>{hero.first_appearance}</p>
      
      <p className="text-lg font-black text-gray-800">
        Characters
        <span className="font-normal text-gray-600 text-base">/{hero.characters}</span>
      </p>
      <button type="button" 
      className="text-blue-700 w-[30%]
       hover:text-white border
        border-blue-700 hover:bg-blue-800 
        focus:ring-4 focus:outline-none focus:ring-blue-300
         font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
          dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      onClick={onNavigateBack}>
       Regresar
      </button>
    </div>
  </div>
</div>
    </>
  )
}
