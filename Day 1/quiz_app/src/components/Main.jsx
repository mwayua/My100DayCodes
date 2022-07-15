import React from "react";
import '../App.css';

export default function Main() {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>View Higscores!</li>
                    <li>Back</li>
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