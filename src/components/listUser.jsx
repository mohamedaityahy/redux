import { useDispatch, useSelector } from "react-redux";
import { del } from "../config/action";
import { Link } from "react-router-dom";

export default function Liste() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>user list</h1>
        <Link to={'/add'}>
          <button>add product</button>
        </Link>
      </div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>number</th>
            <th>action</th>
          </tr>
        </tbody>
        {users.map((u, key) => {
          return (
            <tr key={key}>
              <td> {u.id} </td>
              <td> {u.name} </td>
              <td> {u.email} </td>
              <td> {u.number} </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(del(u.id));
                  }}
                >
                  del
                </button>
                <Link to={`up/${u.id}`}>
                  <button>edit</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
