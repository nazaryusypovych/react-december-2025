import coursesTitleArray from "../data/coursesTitle.ts";


const CoursesTitleComponent = () => {
    return (
        <ul>
            {
                coursesTitleArray.map((course: string, index: number) =><li key={index}>{course}</li>)
            }

        </ul>
    );
};

export default CoursesTitleComponent;