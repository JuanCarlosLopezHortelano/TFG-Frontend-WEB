
export function Footer() {
  return (
    <footer style={styles.footer}>
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
    background: "var(--background-color)",
    padding: "20px",
    textAlign: "center",
    color: "#666",
    fontSize: "0.875rem",
    boxShadow: "8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)",
    borderRadius: "12px 12px 0 0",
  },
  footerContent: {
    maxWidth: "1128px",
    margin: "0 auto",
  },
  footerNav: {
    margin: "10px 0",
  },
  footerLink: {
    margin: "0 10px",
    textDecoration: "none",
    color: "var(--primary-color)",
  },
  socialMedia: {
    marginTop: "10px",
  },
};

export default Footer;
