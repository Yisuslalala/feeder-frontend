// import { Feedings } from "../features/Feedings";
import { Feedings } from "@/features/feedings";

export const FeederApp = () => {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center container">
        <h1 className="header-title fw-800">Feeder App</h1>
      </div>
      <div className="d-flex justify-content-center feeder">
        <div>
          {/* here goes feeders component */}
          <Feedings />

        </div>
      </div>
    </>
  );
}
