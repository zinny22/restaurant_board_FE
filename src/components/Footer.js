import React from "react";
import { Grid, Text } from "../elements/Index";

const Footer = () => {
  return (
    <div style={{bottom:"0",  width:"100%", height:"6%"}}>
    <Grid is_flex bg="#f68843" margin="auto" padding="5px">
      <Grid is_flex width="50%">
        <Text size="25px" margin="auto" color="white">
          (주)맛있는거4조
          <Text size="3px" color="white">
            @2022 맛있는거4조 - All rights reserved
          </Text>
        </Text>
      </Grid>

      <Text size="15px" margin="auto" color="white">
        FE : 유호빈, 장혜진, 고주열
        <br />
        BE : 반장훈, 오세웅
      </Text>
    </Grid>
    </div>
  );
};

export default Footer;
