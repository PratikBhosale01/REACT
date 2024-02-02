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

    return( 
    //<button className={styles.button} >click Me</button>  
    <button style={styles} >click Me</button>  //inline css 
     )
        

    // used curly brackets for dynamic value
     
 }

 export default button