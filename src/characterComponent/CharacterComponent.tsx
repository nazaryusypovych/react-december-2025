import type {SimpsonsModel} from "../model/SimpsonsModel.ts";
import './CharacterComponent.css'
import type {FC, ReactNode} from "react";


type CharacterProms = {
    item: SimpsonsModel,
    children: ReactNode
}


const CharacterComponent: FC <CharacterProms> = ({item, children}) => {
    return (
        <div>
            <h3>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;