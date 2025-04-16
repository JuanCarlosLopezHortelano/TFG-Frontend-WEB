
export function Footer() {
  return (
    <footer >
      <div style={styles.footerContent}>
        <p>© 2025 Mi TFG. Todos los derechos reservados.</p>
        <nav style={styles.footerNav}>
          <a href="/privacidad" style={styles.footerLink}>Política de Privacidad</a>
          <a href="/terminos" style={styles.footerLink}>Términos y Condiciones</a>
          <a href="/contacto" style={styles.footerLink}>Contacto</a>
        </nav>
        <div style={styles.socialMedia}>
          <a href="https://twitter.com" style={styles.footerLink}>Twitter</a>
          <a href="https://facebook.com" style={styles.footerLink}>Facebook</a>
          <a href="https://instagram.com" style={styles.footerLink}>Instagram</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#e0e0e0",
    padding: "20px",
    textAlign:  "center",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
  },
  footerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  footerNav: {
    margin: "10px 0",
  },
  footerLink: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#333",
  },
  socialMedia: {
    marginTop: "10px",
  },
};

export default Footer;
