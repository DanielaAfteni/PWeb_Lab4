import React, { useRef } from 'react';
import axios from 'axios';
import "../styles/style.css";


function Register(props) {
  const StudentName = useRef(null);
  const StudentSurname = useRef(null);

  const registerStudent = (event) => {
    event.preventDefault();
    axios.post("https://late-glitter-4431.fly.dev/api/v54/users", {
			data: {
        name: StudentName.current.value,
        surname: StudentSurname.current.value
    	}
		},
		{
			headers: { "X-Access-Token": "34b3233daafe0d93ae620b8f99caf6fb09bc5fa4ffa2b3e5611f0f4d04d552b0" }
		})
		.then(function (response) {
			localStorage.setItem("userId", response.data.id);
      props.userIdGet(response.data.id); 
		});
  };
  
  return ( <>
      <form className="register-student" onSubmit={(event) => registerStudent(event)}>
        <input type="text" ref={StudentName} name="name" required placeholder="Stundent's name" />
        <input type="text" ref={StudentSurname} name="surname" required placeholder="Stundent's surname" />
        <input type="submit" onClick={registerStudent} value="Create a student" />
      </form> 
		</>
  );
}

export default Register;