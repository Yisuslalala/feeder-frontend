export const Feeding = ({ feedAt, onEditMeal, onDeleteMeal }) => {

  return (
    <div className="container-item border">
      <div>
        <div>{JSON.stringify(feedAt)}</div>

        <p>pet feeded at <strong>{feedAt}</strong></p>
        <div className="buttons">
          {onEditMeal && (
            <button onClick={onEditMeal}>
              Edit meal
            </button>
          )}
          {onDeleteMeal && (
            <button onClick={onDeleteMeal}>
              Delete meal
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
