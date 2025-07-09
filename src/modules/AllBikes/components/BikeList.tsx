import { Grid } from "@mui/material";
import BikeCard from "./BikeCardIndex";
import Logo from "../../../assets/images/Logo.png";
import type { Theft } from "../../../types/Theft";

const BikeList = ({ bikes }: { bikes: Theft[] }) => {
  return (
    <>
      {bikes.map((bike) => (
        <Grid item xs={12} sm={12} md={6} key={bike.id}>
          <BikeCard
            title={bike.title}
            description={bike.description}
            theftDate={bike.date_stolen}
            reportedDate={bike.reportedDate}
            location={bike.stolen_location}
            image={bike.thumb !== null ? bike.thumb : Logo}
          />
        </Grid>
      ))}
    </>
  );
};

export default BikeList;
