
function List(){
    
  const fruit = ["apple", "orange", "cherry", "mango"];

    const listItems =fruit.map(fruit => <li>{fruit}</li>);
    // map :-Creates a new array with the results of some operation. The value its callback returns are used to form new array
  return(
      <ol>{listItems}</ol>
    );
}

export default List