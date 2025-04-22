import { useState, useEffect } from "react"
import { Feeding } from "./Feeding";
///import { fetchFeedings } from "./fetchFeedings.jsx"
import { fetchFeedings } from "@/features/feedings"

export const Feedings = () => {

  const [feedings, setFeedings] = useState([]);

  useEffect(() => {
    const getFeedings = async () => {
      try {
        const feeds = await fetchFeedings();
        setFeedings(feeds);
      } catch (e) {
        throw new Error(`Error at getFeedings`, e);
      }
    };

    getFeedings();
  }, []);

  useEffect(() => {
    console.log(`Data updated`, feedings);
  }, [feedings]);

  return (
    <>
      <h3>Inside Feedings Component</h3>

      {feedings.map((feeding) => (
        <Feeding
          key={feeding.id}
          feedAt={feeding.feedAt}
        />
      ))}
    </>

  );
};

export default Feedings;
