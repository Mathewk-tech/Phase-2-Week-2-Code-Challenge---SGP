import { useState } from "react";
const url = "https://phase-2-week-2-code-challenge-sgp.onrender.com";

function Goal({ setgoals }) {
    const [form, setForm] = useState({
        name: "",
        targetAmount: "",
        category: "",
        deadline: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newGoal = {
            ...form,
            targetAmount: parseFloat(form.targetAmount),
            savedAmount: 0,
            createdAt: new Date().toISOString().split('T')[0]
        };

        fetch(`${url}/goals`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newGoal)
        })
        .then(res => res.json())
        .then(() => {
            fetch(`${url}/goals`)
                .then(res => res.json())
                .then(data => setgoals(data));
        });

        setForm({ name: "", targetAmount: "", category: "", deadline: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="targetAmount" type="number" value={form.targetAmount} onChange={handleChange} placeholder="Amount" required />
            <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
            <input type="date" name="deadline" value={form.deadline} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Goal;