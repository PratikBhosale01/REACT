

function UserGreet(props) {

 const GreetMsg =<h3 className="Greet-msg">Hello {props.username} </h3>
 const LogProm =<h3 className="log-Prom">logging to user </h3>


  return(
    props.isLoggedIn? GreetMsg : LogProm
  )
}

export default UserGreet