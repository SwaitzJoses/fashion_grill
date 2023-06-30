import { Link, useParams } from "react-router-dom";
import './admin.css'
const Admin = () => {

  
  const { id: admin } = useParams();
  console.log(admin);
  return (
    <>
    <div className="admin_text">
      <Link style={{ textDecoration: 'none' }} to={{ pathname: `../.././item/add/${admin}` }} >
         <p className="admin_add">Add item </p>
         <Link style={{ textDecoration: 'none' }} to={{ pathname: `../.././item/delete/${admin}` }} >
         <p className="admin_add">Delete item </p>
      </Link>
      <Link style={{ textDecoration: 'none' }} to={{ pathname: `../.././item/edit/${admin}` }} >
         <p className="admin_add">Edit item </p>
      </Link>
      
      </Link>
    </div>
      
    </>
  );
};
export default Admin;
