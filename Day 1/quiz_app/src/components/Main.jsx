import React from "react";
// import '../App.css';
// import quizData from "./QuizData";

export default function Main() {
    const quizData = [
        {
            question: 'Javascript is an _______ language?',
            a: 'Object-Oriented',
            b: 'Object-Based',
            c: 'Procedural',
            d: 'None of the above',
            correct: 'a',
        },
        {
            question:
                ' Which of the follwing keywords is used to defind a variable in Javascript ',
            a: 'var',
            b: 'let',
            c: 'Both A and B',
            d: 'Const',
            correct: 'c',
        },
        {
            question:
                'Which of the following methods is used to access HTML elements using Javascript?',
            a: 'getElementbyId()',
            b: 'getElementByClassName()',
            c: 'document.querySelector()',
            d: 'All of the above',
            correct: 'd',
        },
        {
            question:
                'What keyword is used to check whether a given property is valid or not ',
            a: 'in',
            b: 'is in',
            c: 'exists',
            d: 'lies',
            correct: 'a',
        },
        {
            question:
                'Which function is used to serialize an object into a JSON string in Javascript?',
            a: 'stringify()',
            b: 'parse()',
            c: 'convert()',
            d: 'None of the above',
            correct: 'a',
        },
    ];
    const startQuizBtn = document.getElementById('start');
    const firstPage = document.querySelector('.start');
    const quizContainer = document.querySelector('.quiz-container');
    const ticks = document.querySelector('.ticks');

    const quiz = document.getElementById('quiz');
    const radioEle = document.getElementsByName('answer');
    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.querySelector('#submit');


    const leaderboardBtn = document.getElementById('leaderboard-submit');
    const leadboard = document.getElementById('leaderboard');
    const mainContainer = document.querySelector('.main-container');

    let currentQuiz = 0;
    let score = 0;
    let timeleft = 50;
    var downloadTimer;

    uncheckAnswers();
    loadQuiz();




    return (
        <div className="container">
            <nav>
                <ul>
                    <li id="leaderboard">View Higscores!</li>
                    <li id="back">Back</li>
                    <li id="countdown"></li>
                </ul>
            </nav>
            <main>
                <div className="main-container">
                    <div className="ticks">

                    </div>

                    <div className="start">
                        <h1>Coding Quiz Challenge</h1>
                        <p>Try to answer the following code-related questions within the time limit.<br />
                            Keep in mind that incorrect answers will penalize your score/time by ten second!</p>
                        <p>All the best!</p>
                        <button id="start">Start Quiz</button>
                    </div>

                    <div className="quiz-container" id="quiz">
                        <div className="quiz-header ">
                            <h2 id="question">Question Text</h2>
                            <ul>
                                <li>
                                    <input type="radio" id="a" name="answer" />
                                    <label id="a_text" for="a">Question</label>
                                </li>
                                <li>
                                    <input type="radio" id="b" name="answer" />
                                    <label id="b_text" for="b">Question</label>
                                </li>
                                <li>
                                    <input type="radio" id="c" name="answer" />
                                    <label id="c_text" for="c">Question</label>
                                </li>
                                <li>
                                    <input type="radio" id="d" name="answer" />
                                    <label id="d_text" for="d">Question</label>
                                </li>
                            </ul>
                        </div>
                        <button id="submit">Submit</button>
                    </div>
                    <div className="highscore">

                    </div>
                </div>
            </main>

        </div>

    );
}