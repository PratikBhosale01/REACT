import AppHeader from './AppHeader.jsx'
import AppFooter from './AppFooter.jsx'
import AppFood from './AppFood.jsx'
import AppCard from './AppCard.jsx'
import Button from './Button/button.jsx'
import Student from './Student/Student.jsx'
import UserGreet from './UserGreet.jsx'
import List from './List.jsx'

function App() {


  const fruit = [{ id:1,name :"apple",cal:12}, 
  {id:2,name:"orange", cal:18}, 
  {id:3, name:"cherry", cal:14}, 
 {id:4, name:"mango" ,cal:15}];
 
  return(
    <>
    
    <AppHeader/>
    <UserGreet isLoggedIn={true} username="Xplorer" />
    <List list={fruit} category="fruit"/>
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
