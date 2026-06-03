import { Box, Container, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <div className="container py-5 md:py-12">
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, color: "#003500", fontFamily: "var(--font-heading)", textAlign: "center" }}>Privacy Policy</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>At Raphael Healthcare Solutions ("we," "us," or "our"), your privacy is of utmost importance. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>1. Information We Collect</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
        We collect information to provide better services to all our users. The types of information we collect include:
      </Typography>
      <ul>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Personal Identification Information: name, email address, phone number, medical needs, and other contact details you provide when you contact us or use our services.</Typography></li>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Technical Data: IP address, browser type, operating system, and browsing behavior collected automatically through cookies and tracking technologies.</Typography></li>
      </ul>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>2. How We Use Your Information</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>We use your information to:</Typography>
      <ul>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Provide, operate, and maintain our services.</Typography></li>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Respond to inquiries and provide customer support.</Typography></li>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Send updates, newsletters, and promotional communications with your consent.</Typography></li>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Improve our website, services, and user experience.</Typography></li>
      </ul>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>3. Information Sharing and Disclosure</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website or providing services, only under confidentiality agreements. We may also disclose your information when required by law or to protect our rights.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>4. Cookies and Tracking Technologies</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control or disable cookies through your browser settings.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>5. Data Security</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>6. Your Rights</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Depending on your jurisdiction, you may have the right to access, update, or delete your personal information. You can also object to certain data processing practices or withdraw consent at any time.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>7. Children's Privacy</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>8. Changes to This Privacy Policy</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of our services after changes indicates your acceptance of the updated policy.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>9. Contact Us</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>If you have any questions or concerns about this Privacy Policy, please contact us at:<br/><br/>Raphael Healthcare Solutions<br/>
        Email: <a href="mailto:raphaelhealthcaresolutions@gmail.com">raphaelhealthcaresolutions@gmail.com</a><br />
        Phone: <a href="tel:+919205251387">+91 9205251387</a> / <a href="tel:+919810867321">+91 9810867321</a><br />
        Website: <a href="https://www.raphaelhealthcaresolutions.com" target="_blank" rel="noopener noreferrer">www.raphaelhealthcaresolutions.com</a>
      </Typography>
    </div>
  );
}
