import type {CoursesArrayType} from "../model/CoursesArrayModel.ts";
import type {FC} from "react";

type CoursePomps = {
    course: CoursesArrayType
}


const CourseComponent: FC <CoursePomps> = ({course}) => {
    return (
        <div>
            <h3>{course.title} - {course.monthDuration}</h3>

        </div>
    );
};

export default CourseComponent;