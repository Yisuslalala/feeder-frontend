import { createFeeding } from "../services/createFeeding";

export const CreateFeeding = ({ onCreateFeeding }) => {

  const handleCreate = async () => {
    // try {
    createFeeding({});
    // onCreateFeeding?.(res);
    // console.log(res);
    // } catch (e) {
    //   throw new Error(`Error at handleCreate feeding`, e.error);
    // }

  };

  return (
    <button onClick={handleCreate}>Alimentar miau</button>
  );
};

export default CreateFeeding;
