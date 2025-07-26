const url="https://phase-2-week-2-code-challenge-sgp.onrender.com"

function Delete({id,setgoals}){
       function handleDelete() {
        fetch(`${url}/goals/${id}`, { method: "DELETE" })
            .then(() => {
                fetch(`${url}/goals`)
                    .then(res => res.json())
                    .then(data => setgoals(data));
            });
    }

    return <button onClick={handleDelete}>Delete</button>;
   
}
export default Delete;