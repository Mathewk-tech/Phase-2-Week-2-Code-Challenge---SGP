import Item from "./item";

function List({ goals, setgoals }) {
    const z={
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '20px',
        width: '100%',
        
        
    }
  return (
    <div >
      <h2 style={{textAlign:"center"}}>MY GOALS</h2>
      <div style={z}>
        {goals.map(goal => (
          <Item key={goal.id} goal={goal} setgoals={setgoals} />
        ))}
      </div>
      
    </div>
  );
}

export default List;
