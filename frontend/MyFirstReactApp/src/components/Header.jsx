import { link } from "react-router-dom"
function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
        <div className="text-primary fs-4 fw-bold">My Company</div>

        <div className="d-flex gap-4">
         
        </div>

        <div className="d-flex gap-3">
          <button className="btn btn-outline-primary">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </>
  );
}
export default Header;
