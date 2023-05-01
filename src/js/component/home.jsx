import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<> <div>
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-subtle">
		  <div className="container">
			<a className="navbar-brand" href="#">
			  Start Bootstrap
			</a>
			<button
			  className="navbar-toggler d-lg-none"
			  type="button"
			  data-bs-toggle="collapse"
			  data-bs-target="#navbarNavDropdown"
			  aria-controls="navbarNavDropdown"
			  aria-expanded="false"
			  aria-label="Toggle navigation"
			>
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
			  <ul className="navbar-nav">
				<li className="nav-item active">
				  <a className="nav-link" href="#">
					Home
				  </a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#">
					About
				  </a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#">
					Services
				  </a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#">
					Contact
				  </a>
				</li>
				<li className="nav-item dropdown d-lg-none">
				  <a
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdownMenuLink"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				  >
					Menu
				  </a>
				  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<a className="dropdown-item" href="#">
					  Home
					</a>
					<a className="dropdown-item" href="#">
					  About
					</a>
					<a className="dropdown-item" href="#">
					  Services
					</a>
					<a className="dropdown-item" href="#">
					  Contact
					</a>
				  </div>
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
		
	  </div>

  

		
		<div className="d-flex justify-content-center">
      <div className="card mr-3" style={{ width: "18rem" }}>
        <img
          src="https://placehold.jp/9599db/ffffff/500x325.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More
          </a>
        </div>
      </div>
      <div className="card mr-3" style={{ width: "18rem" }}>
        <img
          src="https://placehold.jp/9599db/ffffff/500x325.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More
          </a>
        </div>
      </div>
      <div className="card mr-3" style={{ width: "18rem" }}>
        <img
          src="https://placehold.jp/9599db/ffffff/500x325.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More
          </a>
        </div>
      </div>
      <div className="card mr-3" style={{ width: "18rem" }}>
        <img
          src="https://placehold.jp/9599db/ffffff/500x325.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More
          </a>
        </div>
      </div>
    </div>
	<footer className="footer footer-expand-lg footer-light bg-secondary bg-subtle">
		  <div className="container text-center">
			<span className="text">Established 1993</span>
			<span>&copy; {new Date().getFullYear()}</span>
		  </div>
		</footer>


		</>
	);
};
export default Home;

