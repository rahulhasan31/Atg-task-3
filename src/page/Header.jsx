export default function Header() {
  return (
    <nav className="navbar bg-light d-lg-block d-none mb-3">
      <div className="container-fluid d-flex justify-content-lg-between">
        <dir className="">
          <a className="navbar-brand">
            <img
              className="me-5"
              src="https://i.ibb.co/vYdpV3v/whole-1.png"
              alt=""
            />
          </a>
          <small className=" bg-secondary bg-opacity-10 rounded-4 px-5 py-2 fw-semibold  ms-5">
            Search for your favorite groups in ATG
          </small>
        </dir>
      </div>
    </nav>
  );
}
