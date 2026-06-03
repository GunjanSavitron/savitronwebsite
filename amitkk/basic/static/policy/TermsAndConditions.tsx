import { Box, Container, Typography } from "@mui/material";

export default function TermsConditions() {
  return (
      <div className="container py-5 md:py-12">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, color: "#003500", fontFamily: "var(--font-heading)", textAlign: "center" }}>Terms & Conditions</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Welcome to Raphael Healthcare Solutions. These Terms & Conditions ("Terms") govern your use of our website, services, and any interactions with us. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>1. Services</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Raphael Healthcare Solutions provides medical travel consultancy, healthcare coordination, and related services. We act as facilitators between patients and medical providers but do not directly provide medical or healthcare services.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>2. Use of Website</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the website. Unauthorized use may give rise to a claim for damages or be a criminal offense.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>3. Medical Advice Disclaimer</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>The information provided on this website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or  Always seek the advice of a qualified healthcare provider with any questions regarding a medical condition.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>4. Patient Responsibilities</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Patients are responsible for providing accurate and complete medical information and for following the instructions and guidance provided by healthcare professionals and Raphael Healthcare Solutions.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>5. Booking and Payments</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>All bookings and payments for medical  and travel arrangements made through Raphael Healthcare Solutions are subject to the terms of the respective medical providers and travel agencies. Raphael Healthcare Solutions acts as a facilitator and is not responsible for any payment disputes or cancellations.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>6. Refunds and Cancellations</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Please refer to our Refund Policy for details on cancellations and refunds. We recommend reviewing those terms carefully before making any payment.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>7. Limitation of Liability</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Raphael Healthcare Solutions shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services or website. We do not guarantee specific outcomes or results related to medical  or travel arrangements.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>8. Privacy</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>9. Intellectual Property</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>All content on this website, including text, graphics, logos, images, and software, is the property of Raphael Healthcare Solutions or its licensors and is protected by applicable intellectual property laws.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>10. Changes to Terms</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website. Continued use of the website after any changes constitutes your acceptance of the updated Terms.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>11. Governing Law</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in India.</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>12. Contact Us</Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>If you have any questions about these Terms, please contact us:<br/><br/>Raphael Healthcare Solutions<br />
          Email: <a href="mailto:raphaelhealthcaresolutions@gmail.com">raphaelhealthcaresolutions@gmail.com</a><br />
          Phone: <a href="tel:+919205251387">+91 9205251387</a> / <a href="tel:+919810867321">+91 9810867321</a><br />
          Website: <a href="https://www.raphaelhealthcaresolutions.com" target="_blank" rel="noopener noreferrer">www.raphaelhealthcaresolutions.com</a>
        </Typography>
      </div>
  );
}
