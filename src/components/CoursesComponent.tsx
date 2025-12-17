import CoursesAndDurationArray from "../data/CoursesAndDuration.ts";
import CourseComponent from "./CourseComponent.tsx";


const CoursesComponent = () => {
    return (
        <ul>
            {
                CoursesAndDurationArray.map((course, index) =>{
                    return <CourseComponent course={course} key={index}/>
                })
            }
        </ul>
    );
};

export default CoursesComponent;