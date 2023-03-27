import {
  IconButton,
  Select,
  InputAdornment,
  OutlinedInput,
  MenuItem,
} from "@mui/material";

export const InputTextField = ({
  value,
  placeholder,
  onChange,
  endIcon,
  styles,
  handleClick,
}) => {
  return (
    <>
      <OutlinedInput
        value={value}
        onChange={onChange}
        sx={{
          borderRadius: "8px",

          ...styles,
        }}
        inputProps={{
          placeholder: placeholder,
          style: {
            height: "8px",
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClick}
              edge="end"
              sx={{
                color: "#000",
              }}
            >
              {endIcon}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export const SelectField = ({
  defaultValue,
  value,
  onChange,
  options,
  styles,
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      displayEmpty
      sx={{ height: "40px", minWidth: 70, ...styles }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};
