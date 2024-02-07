
function List(){
    
  const fruit = ["apple", "orange", "cherry", "mango"];

    const listItems =fruit.map(fruit => <li>{fruit}</li>);
  return(
      <ol>{listItems}</ol>
    );
}

export default List