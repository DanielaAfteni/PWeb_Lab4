import { Routes, Route } from "react-router-dom";
import './App.css';
import Quizzes from './components/Quizzes';
import Eachquiz from './components/Eachquiz';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="element-app">
        <Routes>
          <Route path="/" element={<Quizzes />} exact />
          <Route path="/quiz/:quizId" element={<Eachquiz />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
