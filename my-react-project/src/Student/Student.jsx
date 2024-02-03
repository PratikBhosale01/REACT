function student(props){

    return(
        <div>
            <p> Name:{props.name} </p>
            <p> Age:{props.age} </p>
            <p> IsStudent: {props.isStudent? "yes" : "no"} </p>

        </div>
    );

}

 export default student