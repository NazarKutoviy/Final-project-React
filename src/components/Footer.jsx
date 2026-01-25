export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <img className="footer-logo" src="/img/logo.png" alt="logo" />
        <div className="footer-address">
          <h4 className="footer-address-title">Address</h4>
          <p className="footer-address-text">Svobody str. 35 Kyiv Ukraine</p>
        </div>
        <div className="footer-info">
          <h4 className="footer-info-title">Contact us</h4>
          <div className="footer-info-contact">
            <a className="footer-info-link">
              <img
                className="footer-info-icon"
                src="/img/insta.png"
                alt="instagram"
              />
            </a>
            <a className="footer-info-link">
              <img
                className="footer-info-icon"
                src="/img/facebook.png"
                alt="facebook"
              />
            </a>
            <a className="footer-info-link">
              <img
                className="footer-info-icon"
                src="/img/whatsapp.png"
                alt="whatsapp"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
