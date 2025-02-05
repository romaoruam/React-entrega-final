const Sucursal = () => {
    return (
      <div className="container text-center mt-5">
        <h2 className="fw-bold">Nuestra Sucursal</h2>
        <p className="lead">¡Ven a visitarnos y disfrutá los mejores sándwiches de miga!</p>
  
        {/* Mapa de Google Maps con dirección exacta */}
        <div className="embed-responsive embed-responsive-16by9 mt-4">
          <iframe
            className="embed-responsive-item w-100"
            style={{ height: "400px", borderRadius: "10px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2259071672706!2d-58.5043535!3d-34.6994816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcced6dd654dfd%3A0x89b392209db7eb02!2sAltas%20Cumbres!5e0!3m2!1ses-419!2sar!4v1738718026017!5m2!1ses-419!2sar"
            allowFullScreen
            loading="lazy"
            title="Ubicación de Altas Cumbres"
          ></iframe>
        </div>
  
        <p className="mt-3">📍 Dirección: Altas Cumbres, Argentina</p>
        <p>📞 Teléfono: +54 11 1234-5678</p>
      </div>
    );
  };
  
  export default Sucursal;
  