function Delete({id,setgoals}){
       function handleDelete() {
        fetch(`http://localhost:3001/goals/${id}`, { method: "DELETE" })
            .then(() => {
                fetch("http://localhost:3001/goals")
                    .then(res => res.json())
                    .then(data => setgoals(data));
            });
    }

    return <button onClick={handleDelete}>Delete</button>;
   
}
export default Delete;