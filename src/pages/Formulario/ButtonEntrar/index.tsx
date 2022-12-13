import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useStyles from "./styles";

const ButtonEntrar = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.container}>
      <Button sx={styles.button}>ENTRAR</Button>
    </Box>
  );
};

export default ButtonEntrar;