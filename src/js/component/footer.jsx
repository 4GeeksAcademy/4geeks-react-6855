import React from "react";

const Footer = () => {
    return (
    <footer className="footer footer-expand-lg footer-light bg-secondary bg-subtle">
		  <div className="container text-center">
			  <span className="text">Established 1993</span>
			  <span>&copy; {new Date().getFullYear()}</span>
		  </div>
		</footer>
    );
}
export default Footer