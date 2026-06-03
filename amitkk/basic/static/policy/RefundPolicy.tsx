import { Box, Container, Typography } from "@mui/material";

export default function RefundPolicy() {
  return (
    <div className="container py-5 md:py-12">
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, color: "#003500", fontFamily: "var(--font-heading)", textAlign: "center" }}>Refund Policy</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>At Raphael Healthcare Solutions ("we," "us," or "our"), we are committed to providing quality healthcare services and transparent policies. This Refund Policy outlines the terms and conditions regarding refunds for the services and products we offer.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>1. Scope of Refunds</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>This policy applies to payments made for consultation services, medical travel packages, and other healthcare-related services offered by Raphael Healthcare Solutions.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>2. Refund Eligibility</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Refunds may be considered under the following circumstances:</Typography>
      <ul>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Cancellation of services initiated by Raphael Healthcare Solutions.</Typography></li>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Errors in billing or duplicate charges.</Typography></li>
        <li><Typography variant="body1" sx={{ mb: 1 }}>When services are not delivered as promised or agreed upon.</Typography></li>
      </ul>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>3. Non-Refundable Items</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>The following payments are generally non-refundable:</Typography>
      <ul>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Consultation fees once the consultation has been conducted.</Typography></li>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Travel, accommodation, or third-party costs related to medical travel arrangements.</Typography></li>
        <li><Typography variant="body1" sx={{ mb: 1 }}>Any services that were partially or fully rendered.</Typography></li>
      </ul>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>4. Refund Request Procedure</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>To request a refund, please contact us within 14 days of the payment or service date by emailing <a href="mailto:raphaelhealthcaresolutions@gmail.com">raphaelhealthcaresolutions@gmail.com</a> or calling <a href="tel:+919205251387">+91 9205251387</a>. Include your payment details, reason for refund, and any supporting documentation.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>5. Processing Time</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Refund requests will be reviewed promptly. Approved refunds will be processed within 14 business days to the original payment method. Please note that the time taken by banks or payment providers to reflect the refund in your account may vary.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>6. Changes to This Policy</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>Raphael Healthcare Solutions reserves the right to modify this Refund Policy at any time. We encourage you to review this page periodically. Continued use of our services after any modifications indicates your acceptance of the updated policy.</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>7. Contact Us</Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>For any questions, concerns, or refund requests, please contact us:<br/><br/>Raphael Healthcare Solutions<br />
        Email: <a href="mailto:raphaelhealthcaresolutions@gmail.com">raphaelhealthcaresolutions@gmail.com</a><br />
        Phone: <a href="tel:+919205251387">+91 9205251387</a> / <a href="tel:+919810867321">+91 9810867321</a><br />
        Website: <a href="https://www.raphaelhealthcaresolutions.com" target="_blank" rel="noopener noreferrer">www.raphaelhealthcaresolutions.com</a>
      </Typography>
    </div>
  );
}