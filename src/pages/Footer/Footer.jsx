export default function Footer() {
    return (
      <>
        {/* Footer */}
        <footer className="text-center text-lg-start bg-dark text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="me-4 text-white">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-white">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 text-white">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-white">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-white">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 text-white">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4 text-white">
                    <i className="fas fa-gem me-3" />
                    Nike Store
                  </h6>
                  <p>
                    Based in Beaverton, Oregon, NIKE, Inc. includes the Nike,
                    Converse, and Jordan brands. We   re the leading sports brand in
                    the world because we keep athletes ...
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase text-white fw-bold mb-4">Get Help</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Order Status
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Delivery
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Return
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Payment Options
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4 text-white">About Nike</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      News
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Careers
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Investors
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Sustainability
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3" /> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://nike.com/">
              Nike.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    );
  }
  