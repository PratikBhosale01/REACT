import propsTypes from 'prop-types';

function student(props){

    return(
        <div>
            <p> Name:{props.name} </p>
            <p> Age:{props.age} </p>
            <p> IsStudent: {props.isStudent? "yes" : "no"} </p>
            <hr />

        </div>
    );

    

}
student.defaultProps={
        name: "Guest",
        age: 0,
        isStudent: false,
}

student.protoType ={
        name: propsTypes.string,
        age : propsTypes.number,
        isStudent: propsTypes.boolean,
    }

 export default student