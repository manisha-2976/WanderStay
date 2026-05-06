import { useParams } from "react-router-dom";
import { PriceSetting } from "./PriceSetting";

export const PriceSettingsMob = () => {
  const { id } = useParams();

  return (
    <div className="container py-3">
      <PriceSetting listingId={id} />
    </div>
  );
};