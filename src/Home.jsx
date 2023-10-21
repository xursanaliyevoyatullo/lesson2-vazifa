import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-center mt-10 font-bold">Crud App with JSON Server</h2>
            <div className="text-center">
                <Link to="/create" className="btn btn-outline btn-success my-3 mb-7">Create +</Link>
            </div>
            <table className="m-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th className="pl-7">Email</th>
                        <th className="pl-20">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td className="pl-1">{user.name}</td>
                            <td className="pl-14">{user.email}</td>
                            <td className="flex ml-16 gap-5 mt-3">
                                <Link to={`/edit/${user.id}`} className="btn btn-outline btn-success">Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className="btn btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home