import React, { useState, useEffect } from 'react';
import "../styles/style.css";
import axios from 'axios';
import {useParams} from "react-router-dom";

function Eachquiz() {

	const [userId, setUserId] = useState("");
	const [quiz, setQuiz] = useState({});
	const {quizId} = useParams()
	const [submited, setSubmited] = useState(false);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answer, setAnswer] = useState("");
	const [result, setResult] = useState(0);
	
	const [loaded, setLoaded] = useState(false);
	

	const handleAnswers = (event) => {
		setAnswer(event.target.value)
	};

	useEffect(() => {
		setUserId(localStorage.getItem("userId"));
		axios.get(`https://late-glitter-4431.fly.dev/api/v54/quizzes/${quizId}`, { 
			params: { 
				user_id: userId
			}, 
			headers: { "X-Access-Token": "34b3233daafe0d93ae620b8f99caf6fb09bc5fa4ffa2b3e5611f0f4d04d552b0" }
			})
			.then(response => {
				setQuiz(response.data);
				setLoaded(true);
			});
	}, [userId]);

	const handleSubmit = (event, questionId) => {
		event.preventDefault(event);
		axios.post(`https://late-glitter-4431.fly.dev/api/v54/quizzes/${quizId}/submit?`, {
			data: {
        		question_id: questionId,
        		answer,
        		user_id: userId
    		}
		},
		{
			headers: { "X-Access-Token": "34b3233daafe0d93ae620b8f99caf6fb09bc5fa4ffa2b3e5611f0f4d04d552b0" }
		})
		.then(function (response) {
			if (response.data.correct) setResult((previousState) => previousState + 1)
			if (currentQuestion + 1 < quiz.questions.length) {
				setCurrentQuestion((previousState) => previousState + 1)
			}
			else setSubmited(true);
		});
	};

  return ( <>
	{loaded ? <div><h1 className="quiz-title-page">{quiz.title}</h1>
	{submited ? <div className="quiz-result"><center>
		<p>&nbsp;&nbsp;&nbsp;</p>
		<p>&nbsp;&nbsp;&nbsp;</p>
		<p>&nbsp;&nbsp;&nbsp;</p>
		<p>&nbsp;&nbsp;&nbsp;</p>
		<p>&nbsp;&nbsp;&nbsp;</p>
		<h4>Points: {result}/{quiz.questions.length}</h4></center></div> :

		<form className="element-questions-list" onSubmit={(event) => handleSubmit(event, quiz.questions[currentQuestion].id)}>
			<div className="element-question"> <div className="question-title">
				<p>{currentQuestion + 1}. {quiz.questions[currentQuestion].question}</p></div>
				
				{quiz.questions[currentQuestion].answers.map((answer, index)=>
					<div className="question-answers" key={`${quiz.questions[currentQuestion].question}-${answer}-${index}`} >
						<input type="radio" name={quiz.questions[currentQuestion].question} value={answer} onClick={(event) => handleAnswers(event)} required/>
						<label htmlFor={answer}>{ answer }</label>
					</div>)}

				</div>
			<div className="question-submit-btn"><input type="submit" value={currentQuestion + 1 < quiz.questions.length ? "Next question" : "Submit answers"}/></div>
    	</form>}</div> : <p className="quiz-title-page">Loading quiz...</p>}
	</>
  );
}

export default Eachquiz;

