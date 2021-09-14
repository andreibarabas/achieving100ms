export const Hero: React.FC = () => {
  return (
    <div className="hero-background">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            {/* ----------------------- */}
            <img
              className="d-block mx-lg-auto img-fluid"
              src="/images/woman.png"
              alt="image"
              width="700"
              height="500"
            />
            {/* ----------------------- */}
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Before applying optimization
            </h1>
            <p className="lead">
              This example is ment to showcase tips & tricks on how to optimize
              responsive images and what is the impact on the page loading
              speed.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="https://github.com/andreibarabas/achieving-100ms/blob/S01.E01-before/README.md"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
