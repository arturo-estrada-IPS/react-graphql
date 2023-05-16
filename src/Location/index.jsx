import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "./location.service";
import { Loading, Error } from "../components";
import { LocationItem } from "./location-item";

export default function Locations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <ul className="w-full mt-3">
      {data.locations.map((d) => (
        <LocationItem {...d} />
      ))}
    </ul>
  );
}
