import AppHeader from './AppHeader.jsx'
import AppFooter from './AppFooter.jsx'
import AppFood from './AppFood.jsx'
import AppCard from './AppCard.jsx'
import Button from './Button/button.jsx'
import Student from './Student/Student.jsx'
function App() {
 
  return(
    <>
    <Student name="stud"  age={30}  isStudent={true}/>
    <AppHeader/>
    <AppFood/>
    <AppCard/>
    <Button/>
    <AppFooter/>
    
    
    </>
  );
}

export default App
