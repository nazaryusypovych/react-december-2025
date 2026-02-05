import UsersComponent from "../component/users/UsersComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";


const UserPage = () => {
    return (
        <div>
            <UsersComponent />
            <PaginationComponent />

        </div>
    );
};

export default UserPage;