import wide_shoulder from "../../assets/images/shoulder-files/V-NECK-WIDE-SHOULDER.png";
import narrow_shoulder from "../../assets/images/shoulder-files/V-NECK-NARROW-SHOULDER.png";
import frontShoulderwide from "../../assets/jerseys/10/slicings/front-shoulders-wide.png";
import backshoulderwide from "../../assets/jerseys/10/slicings/back-shoulders-wide.png"
import frontShouldernarrow from "../../assets/jerseys/10/slicings/front-shoulders-narrow.png";
import backshouldernarrow from "../../assets/jerseys/10/slicings/back-shoulders-narrow.png"
const ShoulderImages = [
  {
    id: 1,
    src: narrow_shoulder,
    alt: "narrow_shoulder",
    name: "Narrow Shoulder",
    frontassociate: frontShouldernarrow,
    backassociate: backshouldernarrow
  },
  {
    id: 2,
    src: wide_shoulder,
    alt: "wide_shoulder",
    name: "Wide Shoulder",
    frontassociate: frontShoulderwide,
    backassociate: backshoulderwide
  },
];

export default ShoulderImages;
