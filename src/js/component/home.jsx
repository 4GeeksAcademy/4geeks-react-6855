import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<><nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-subtle">
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
		<header>
            <div className="container py-4">
                <div className="p-5 mb-4 bg-body-secondary rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <button className="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                </div>
            </div>
        </header>	
		
		
		</>
	);
};
export default Home;