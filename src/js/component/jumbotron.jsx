import React from "react";

const Jumbotron = () => {
  return (
    <jumbotron>
    <div className="container py-4">
        <div className="p-5 mb-4 bg-body-secondary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Warm Welcome!</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
        </div>
    </div>
</jumbotron>
  );
};

export default Jumbotron;
