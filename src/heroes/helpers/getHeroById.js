import { heroes } from "../data/heroes"

export const getHeroById = (id)=>{
    console.log(id);
    return heroes.find(hero=>hero.id === id);
}