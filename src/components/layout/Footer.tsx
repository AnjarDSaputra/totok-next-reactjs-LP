import { Typography, Box } from "@material-ui/core";

export default function Footer(): JSX.Element {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="body2" align="center">
        {"Copyright © TT431 "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}
