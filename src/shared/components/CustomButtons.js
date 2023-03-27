import { Button } from "@mui/material";

export const OutlineButton = ({ startIcon, endIcon, title, styles }) => {
  return (
    <>
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        sx={{
          borderRadius: "8px",
          border: "1px solid #000000",
          padding: "12px 20px",
          height: "44px",
          textTransform: "none",
          ...styles,
        }}
        variant="outlined"
      >
        {title}
      </Button>
    </>
  );
};

export const FilledButton = ({ startIcon, color, endIcon, title, styles }) => {
  return (
    <>
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        color={color}
        sx={{
          borderRadius: "8px",
          border: "none",
          padding: "12px 20px",
          height: "44px",
          textTransform: "none",
          ...styles,
        }}
        variant="contained"
      >
        {title}
      </Button>
    </>
  );
};
