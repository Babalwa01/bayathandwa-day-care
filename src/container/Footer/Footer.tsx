import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-copyright">
        <p>{`${new Date().getFullYear()}`} Bayathandwa Day Care Centre.</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
