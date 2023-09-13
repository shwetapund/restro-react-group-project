import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item  me-5">
              <a className="nav-link active" aria-current="page" href="#">About Us</a>
            </li>

            <li className="nav-item dropdown  me-5">
              <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product
              </a>
              <ul className="dropdown-menu ">
                <li><a className="dropdown-item" href="#">Pizza</a></li>
                <li><a className="dropdown-item" href="#">Burger</a></li>
                <li><a className="dropdown-item" href="#">Nudles</a></li>
                <li><a className="dropdown-item" href="#">Munchurian</a></li>
              </ul>
            </li>

            <li className="nav-item  me-5">
              <a className="nav-link active" aria-current="page" href="#">Login</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
        </div>
      </div>
    </nav>
  )
}