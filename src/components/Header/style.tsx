// import { Theme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerTop: {
      display: "flex",
      width: "100vw",
      justifyContent: "center",
    },
    headerContainer: {
      maxWidth: "1200px",
      width: "100%",
      px: 2,
    },
    headerContact: {
      // [theme.breakpoints.down("sm")]: {
      //   display: "flex",
      //   justifyContent: "center",
      // },
    },
    contact: {
      fontSize: 22,
      color: "#FF0000",
      fontWeight: "bold",
    },
  })
);
