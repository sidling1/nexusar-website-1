import { Box } from "@mui/system";
import { Container } from "@mui/material";
import CardOne from "../../components/Home/CardOne/CardOne";
// import CardTwo from "../../components/Solutions/CardTwo/CardTwo";
// import CardThree from "../../components/Solutions/CardThree/CardThree";
// import CardFour from "../../components/Solutions/CardFour/CardFour";
// import CardFive from "../../components/Solutions/CardFive/CardFive";
import HomeDesc from "../../components/Home/HomeDesc/HomeDesc";
import classes from "./Home.module.css";

const HomeContent = (props) => {
  return (
    <Box className={classes.homeBox}>
      <HomeDesc
        heading="Partners For"
        subHeading1="kmdalmsxls jdknsl"
        subHeading2="kdsnmax,keklwdx"
      />
      <CardOne
        heading="Intelligent data driven solutions."
        content="We transform data, projects, and processes to supercharge operations with targeted insights to enable data driven, creative, agile teams."
      />
    </Box>
  );
};

export default HomeContent;
