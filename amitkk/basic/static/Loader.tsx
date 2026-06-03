import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.6)",
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
