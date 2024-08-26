import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroeCard } from "./HeroeCard";


export const HeroList = ({publisher}) => {
  const heroes = useMemo(()=> getHeroesByPublisher(publisher), [publisher] ) ;
  return (
    <>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {
            heroes.map(heroe=>(
               <HeroeCard key={heroe.id} {...heroe}>
               </HeroeCard>
            ))
        }
     </div>
     </div>
    </>
  )
}
