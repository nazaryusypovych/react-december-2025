import Simpsons from "../data/Simpsons.ts";
import CharacterComponent from "../characterComponent/CharacterComponent.tsx";
import type {SimpsonsModel} from "../model/SimpsonsModel.ts";


const FamilyComponent = () => {
    return (
        <div>

            {
                Simpsons.map((simpson: SimpsonsModel, index: number) => <CharacterComponent key={index} item={simpson}>
                    {simpson.info}
                </CharacterComponent>)
            }

        </div>
    );
};

export default FamilyComponent;