
function List(props){
    
  // const fruit = [{ id:1,name :"apple",cal:12}, 
  //               {id:2,name:"orange", cal:18}, 
  //               {id:3, name:"cherry", cal:14}, 
  //              {id:4, name:"mango" ,cal:15}];

              //  fruit.sort((a,b)=>a.name.localeCompare(b.name));   // aphabatical
              //  fruit.sort((a,b)=>b.name.localeCompare(a.name));   //reverse apha
              // fruit.sort((a,b)=>a.cal-b.cal); //numeric
              // fruit.sort((a,b)=>b.cal-a.cal); // rev numeric

              // const lowCalFruits = fruit.filter((fruit) => fruit.cal < 17)
              // const highCalFruits = fruit.filter((fruit) => fruit.cal > 17)
    const category =props.category;
    const itemList = props.list;


    // const listItems =fruit.map(fruit => <li key={fruit.id} >{fruit.name} {fruit.cal}</li>);
    const listItems =itemList.map(fruit => <li key={fruit.id} >{fruit.name} {fruit.cal}</li>);



    // const listLowCalItems =lowCalFruits.map(lowCalFruit=> <li key={lowCalFruit.id} >{lowCalFruit.name} {lowCalFruit.cal}</li>);
    // const highCalItems =highCalFruits.map(highCalFruit=> <li key={highCalFruit.id} >{highCalFruit.name} {highCalFruit.cal}</li>);

    // map :-Creates a new array with the results of some operation. The value its callback returns are used to form new array
  return(<>
    <h3>{category}</h3>
      <ol>{listItems}</ol>
      {/* <ol>{listLowCalItems}</ol>
      <ol>{highCalItems}</ol> */}
      </>
    );
}

export default List