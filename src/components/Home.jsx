import logo from "../assets/altas-cumbres-logo.png";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "80vh" }}>
        <h1 className="fw-bold">Bienvenidos a Altas Cumbres</h1>
        <img src={logo} alt="Altas Cumbres" style={{ width: "300px", marginTop: "20px" }} />
        <p className="lead mt-3">Los mejores sándwiches de miga están aquí.</p>
      </div>
    </div>
  );
};

export default Home;
