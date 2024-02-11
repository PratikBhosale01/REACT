import AppHeader from './AppHeader.jsx'
import AppFooter from './AppFooter.jsx'
import AppFood from './AppFood.jsx'
import AppCard from './AppCard.jsx'
import Button from './Button/button.jsx'
import Student from './Student/Student.jsx'
import UserGreet from './UserGreet.jsx'
import List from './List.jsx'

function App() {


  const fruit = [
    { id:1,name :"apple",cal:12}, 
  {id:2,name:"orange", cal:18}, 
  {id:3, name:"cherry", cal:14}, 
 {id:4, name:"mango" ,cal:15}
];


const newFruit = [
 
];
 
  return(
    <>
   <AppHeader/>
  <UserGreet isLoggedIn={true} username="Xplorer" />


   { fruit.length>0? <List list={fruit} category="fruit"/>:null} 
   {/* if there is no fruit in the list dont render anything */}


   { newFruit.length>0 && <List list={fruit} category=" new fruit"/> }  
   {/* this is know as short circuiting*/}


    <List />
    {/* to check default props */}


    <AppFood/>
    <Student name="stud"  age={30}  isStudent={true}/>
    <Student/>
    <AppCard/>
    <Button/>
    <AppFooter/>
    
    
    </>
  );
}

export default App
