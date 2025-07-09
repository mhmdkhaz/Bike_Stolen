// NoData.js
import { StyledBox, StyledTypography } from "./NoData.styles";

interface NoDataProps {
  text: string;
}

const NoData: React.FC<NoDataProps> = ({ text }) => {
  return (
    <StyledBox>
      <StyledTypography>{text}</StyledTypography>
    </StyledBox>
  );
};

export default NoData;
