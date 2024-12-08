const Footer = () => {
    return (
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Subscripto. All Rights Reserved.</p>
          <p className="text-sm">
            <a href="/privacy-policy" className="hover:text-secondary">Privacy Policy</a> | 
            <a href="/terms-of-service" className="hover:text-secondary"> Terms of Service</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  