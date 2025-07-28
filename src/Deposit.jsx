import { useState } from "react";
const url = "https://phase-2-week-2-code-challenge-sgp.onrender.com";

function Deposit({ goals, setgoals }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!goalId || !amount || isNaN(amount) || Number(amount) <= 0) {
      setError("Please select a goal and enter a valid amount.");
      return;
    }
    setError("");
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;
    const newSavedAmount = Number(goal.savedAmount) + Number(amount);
    fetch(`${url}/goals/${goalId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: newSavedAmount })
    })
      .then(res => res.json())
      .then(() => {
        fetch(`${url}/goals`)
          .then(res => res.json())
          .then(data => setgoals(data));
        setGoalId("");
        setAmount("");
      });
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <select value={goalId} onChange={e => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Deposit Amount"
        required
      />
      <button type="submit">Deposit</button>
      {error && <span style={{ color: "red", marginLeft: 10 }}>{error}</span>}
    </form>
  );
}

export default Deposit;
