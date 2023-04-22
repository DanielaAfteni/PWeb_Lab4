import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import axios from 'axios';
import User from "./Register";

function Quizzes() {
  const [quizList, setQuizList] = useState([]);
  const [pageloaded, setPageLoaded] = useState(false);
  const [userId, setUserId] = useState("");
  
  const settingStudentId = (id) => {
    setUserId(id);
  };

	useEffect(() => {
    setUserId(localStorage.getItem("userId"))
		axios.get("https://late-glitter-4431.fly.dev/api/v54/quizzes", 
    { 
      headers: { "X-Access-Token": "34b3233daafe0d93ae620b8f99caf6fb09bc5fa4ffa2b3e5611f0f4d04d552b0" }
    })
		.then(res => {
			setQuizList(res.data);
			setPageLoaded(true);
		});
	}, []);



  return ( <> 
    <div className="main">
      <h1>ELSE</h1>
      <h2>Facultatea Calculatoare, Informatica si Microelectronica</h2>
    </div>
    {!userId && <User userIdGet={settingStudentId}/>}
    { userId && pageloaded && <div className="list-of-quizzes">
      <ul> {
        quizList.map((quiz) =>
        <li>
           <Link to={`/quiz/${ quiz.id }`}>
            <div className="each-quiz">
              <p className="quiz-title">{ quiz.title }</p>
            </div>
          </Link>
        </li> )}
      </ul> </div>}
    {userId && !pageloaded && <p className="quiz-title-page">QUIZ IS LOADING</p>}
    </>
  );
}

export default Quizzes;
