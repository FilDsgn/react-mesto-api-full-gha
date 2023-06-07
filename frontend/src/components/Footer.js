function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">&#64; {year}, Александр Филимонов</p>
    </footer>
  );
}

export default Footer;
