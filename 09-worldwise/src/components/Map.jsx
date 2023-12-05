import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [serachParams, setSearhParams] = useSearchParams();

  const lat = serachParams.get("lat");
  const lng = serachParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>
        Map {lat} {lng}
      </h1>
      <button onClick={() => setSearhParams({ lat: 10, lng: 20 })}>
        Change
      </button>
    </div>
  );
}

export default Map;
