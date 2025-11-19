import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";

function Adminmenu() {
  return (
    <div>
      <ListGroup defaultActiveKey="#link1">
        <NavLink to="/dashboard/admin/categories" className="list-group-item">
          Category
        </NavLink>
        <NavLink to="/dashboard/admin/createProduct" className="list-group-item">
          Create Product
        </NavLink>
        <NavLink to="/dashboard/admin/products" className="list-group-item">
          Product
        </NavLink>
        <NavLink to="/dashboard/admin/users" className="list-group-item">
          Users
        </NavLink>
      </ListGroup>
    </div>
  );
}

export default Adminmenu;
