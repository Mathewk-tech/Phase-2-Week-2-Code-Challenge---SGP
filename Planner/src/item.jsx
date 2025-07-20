import Delete from "./delete";

function Item({ goal, setgoals }) {
  const {
    name,
    targetAmount,
    savedAmount,
    category,
    deadline
  } = goal;

  const progress = Math.round((savedAmount / targetAmount) * 100);

  // Deadline calculations
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const msInDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((deadlineDate - now) / msInDay);

  // Simple if statements
  let isOverdue = false;
  if (daysLeft < 0 && savedAmount < targetAmount) {
    isOverdue = true;
  }

  let isWarning = false;
  if (daysLeft >= 0 && daysLeft <= 30 && savedAmount < targetAmount) {
    isWarning = true;
  }

  // Background color based on status
  let backgroundColor = "rgba(255,255,255,0.08)";
  if (isOverdue) {
    backgroundColor = "#ffe6e6";
  } else if (isWarning) {
    backgroundColor = "#fffbe6";
  }

  return (
    <div
      style={{
        border: '1px solid #888',
        margin: '10px',
        padding: '16px',
        borderRadius: '10px',
        background: backgroundColor,
        color: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}
    >
      <h3 style={{ color: "red" }}>{name}</h3>
      <p style={{ color: "black" }}>
        Target: <span style={{ color: '#ffd700' }}>${targetAmount}</span>
      </p>
      <p style={{ color: "black" }}>
        Saved: <span style={{ color: '#90ee90' }}>${savedAmount}</span>
      </p>
      <p style={{ color: "black" }}>
        Category: <span style={{ color: '#87ceeb' }}>{category}</span>
      </p>
      <p style={{ color: "black" }}>
        Deadline: <span style={{ color: '#ffa500' }}>{deadline}</span>
        {isOverdue && (
          <span style={{ color: 'red' }}> (Overdue)</span>
        )}
        {isWarning && (
          <span style={{ color: 'orange' }}> (Less than 30 days left!)</span>
        )}
      </p>
      <p style={{ color: "black" }}>Progress: {progress}%</p>
      <progress value={savedAmount} max={targetAmount} style={{ width: '100%' }}></progress>
      <p style={{ color: "black" }}>
        Remaining: <span style={{ color: '#ffb6c1' }}>${targetAmount - savedAmount}</span>
      </p>
      <Delete id={goal.id} setgoals={setgoals} />
    </div>
  );
}

export default Item;
