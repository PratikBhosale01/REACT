import propsTypes from 'prop-types';

function student(props){

    return(
        <div>
            <p> Name:{props.name} </p>
            <p> Age:{props.age} </p>
            <p> IsStudent: {props.isStudent? "yes" : "no"} </p>

        </div>
    );

    

}
student.protoType ={
        name: propsTypes.string,
        age : propsTypes.number,
        isStudent: propsTypes.boolean,
    }

 export default student