
function List(){
    
  const fruit = [{ id:1,name :"apple",cal:12}, 
                {id:2,name:"orange", cal:13}, 
                {id:3, name:"cherry", cal:14}, 
               {id:4, name:"mango" ,cal:15}];

              //  fruit.sort((a,b)=>a.name.localeCompare(b.name));   // aphabatical
               fruit.sort((a,b)=>b.name.localeCompare(a.name));   //reverse apha

    const listItems =fruit.map(fruit => <li key={fruit.id} >{fruit.name} {fruit.cal}</li>);
    // map :-Creates a new array with the results of some operation. The value its callback returns are used to form new array
  return(
      <ol>{listItems}</ol>
    );
}

export default List