import CoursesArray from "../data/CoursesArray.ts";
import type {CoursesArrayType} from "../model/CoursesArrayModel.ts";
import CourseComponent from "../courseComponent/CourseComponent.tsx";


const CoursesComponent = () => {
    return (
        <div>


            {
                CoursesArray.map((course: CoursesArrayType, index: number) =><CourseComponent key={index} course={course}/>)
            }

        </div>
    );
};

export default CoursesComponent;