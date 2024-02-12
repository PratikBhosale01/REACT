// import styles from './button.module.css';

function button(){
    const styles ={
    borderRadius: "8px",
    border: "1px solid transparent",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "500",
    fontFamily: "inherit",
    backgroundColor: "#dcd1d1",
    cursor: "pointer",
    transition: "border-color 0.25s",

    }
        // click event = An interaction when a user clicks on a Epecific element.
    //           we can respond to clicks by passing a callback to the onclick event handler.

    const clickMe = () => { console.log("Oouch !");};
    const stopClick = (name) => { console.log(` ${name} stopp clicking me ... !!!`); };


      


    return( 
        //<button className={styles.button} >click Me</button>  //modules css 
      //<button style={styles} onClick={clickMe} >click Me</button>  //inline css 

    
    <>
   
    <button style={styles} onClick={clickMe} >click Me</button>
    <button style={styles} onClick={()=>stopClick("bro")} >click Me pls</button>  
     </>

     //used arrow function on line 34 because function call with paranthesis will execute it immediately only for line 34 case 
    )
        

    // used curly brackets for dynamic value
     
 }

 export default button