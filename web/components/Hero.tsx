export const Hero: React.FC = () => {
  return (
    <div className="main-banner">
      <div className="main-banner-item item-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1>We Provide Digital Marketing Solutions</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn">Get Started</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-banner-image">
                    <img src="/images/woman.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
