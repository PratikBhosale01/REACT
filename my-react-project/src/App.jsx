import AppHeader from './AppHeader.jsx'
import AppFooter from './AppFooter.jsx'
import AppFood from './AppFood.jsx'
import AppCard from './AppCard.jsx'
import Button from './Button/button.jsx'
import Student from './Student/Student.jsx'
import UserGreet from './UserGreet.jsx'
function App() {
 
  return(
    <>
    
    <AppHeader/>
    <UserGreet isLoggedIn={true} username="Xplorer" />
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
