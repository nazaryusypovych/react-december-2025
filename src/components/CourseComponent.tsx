import type {CoursesAndDurationType} from "../model/CoursesAndDurationModel.ts";
import type {FC} from "react";


type CoursePromps = {
    course: CoursesAndDurationType
}


const CourseComponent: FC <CoursePromps> = ({course}) => {
    return (
        <li>
            {course.title} - {course.monthDuration}
        </li>
    );
};

export default CourseComponent;