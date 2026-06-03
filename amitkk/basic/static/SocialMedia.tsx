import { Stack, IconButton, SxProps, Theme } from "@mui/material";
import Link from "next/link";
import { socialLinks } from "../utils/config";

interface SocialMediaProps {
  sx?: SxProps<Theme>;
  iconSize?: "small" | "medium" | "large";
  defaultIconColor?: string;
  defaultHoverColor?: string;
  spacing?: number;
}

export default function SocialMedia({
  sx = {},
  iconSize = "small",
  defaultIconColor = "rgba(200, 237, 240, 0.8)",
  defaultHoverColor = "white",
  spacing = 1,
}: SocialMediaProps) {
  return (
    <Stack direction="row" spacing={spacing} sx={sx}>
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <IconButton
            key={index}
            component={Link}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            size={iconSize}
            sx={{
              color: defaultIconColor,
              "&:hover": {
                color: defaultHoverColor,
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease",
              p: 0.5,
              ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
            }}
          >
            <Icon />
          </IconButton>
        );
      })}
    </Stack>
  );
}
