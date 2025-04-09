import { useState, useEffect } from "react"
import { Feeding } from "./Feeding";
import { fetchFeedings } from "./fetchFeedings.jsx"

export const Feedings = () => {

  const [feedings, setFeedings] = useState([]);

  useEffect(() => {
    const res = fetchFeedings();

    // if (!res.ok) {
    //   throw new Error(`Error ocurred at using fetchFeedings`);
    // }
    console.log(`data fetched`, feedings);
    setFeedings(res);
  }, []);

  return (
    <>
      <h3>Inside Feedings Component</h3>

      {feedings.map((feeding) => (
        <Feeding
          key={feeding.id}
          feedAt={feeding.feed_at}
        />
      ))}
    </>

  );

};
