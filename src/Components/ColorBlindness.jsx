import React, { useEffect, useState } from 'react'
import c1 from '../Styles/ColorBlindness.module.css'
export default function ColorBlindness() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1)
    const [avarage, setAvarage] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState([]);

    const [plates, setPlates] = useState([{ id: 1, path: "https://www.colour-blindness.com/CBTests/ishihara/Plate1.gif", option1: 12, option2: 2, option3: 1, option4: 'nothing', rightAnswer: 12 }
        , { id: 2, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/2-light.png", option1: 12, option2: 2, option3: 1, option4: 'nothing', rightAnswer: 2 },
    { id: 3, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/1-dark.png", option1: 1, option2: 7, option3: 2, option4: 'nothing', rightAnswer: 1 },
    { id: 4, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/5-med.png", option1: 6, option2: 5, option3: 0, option4: 'nothing', rightAnswer: 5 },
    { id: 5, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/9-light.png", option1: 6, option2: 7, option3: 9, option4: 'nothing', rightAnswer: 9 },
    { id: 6, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/8-light2.png", option1: 8, option2: 3, option3: 0, option4: 'nothing', rightAnswer: 8 },
    { id: 7, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/1-light2.png", option1: 2, option2: 1, option3: 7, option4: 'nothing', rightAnswer: 1 },
    { id: 8, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/3-dark.png", option1: 7, option2: 1, option3: 3, option4: 'nothing', rightAnswer: 3 },
    { id: 9, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/4-med2.png", option1: 8, option2: 4, option3: 3, option4: 'nothing', rightAnswer: 4 },
    { id: 10, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/2-light.png", option1: 2, option2: 0, option3: 1, option4: 'nothing', rightAnswer: 2 },
    { id: 11, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/7-light.png", option1: 8, option2: 7, option3: 1, option4: 'nothing', rightAnswer: 7 },
    { id: 12, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/8-light.png", option1: 6, option2: 8, option3: 3, option4: 'nothing', rightAnswer: 8 },
    { id: 13, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/9-dark.png", option1: 2, option2: 9, option3: 0, option4: 'nothing', rightAnswer: 9 },
    { id: 14, path: "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/6-light2.png", option1: 8, option2: 5, option3: 6, option4: 'nothing', rightAnswer: 6 }
    ])
    const handleOptionChange = (e) => {
        // console.log(e.target)
        setSelectedOption(e.target.value);
        // console.log(e.target.value)
        
    };
    const changeNumber = () => {
        if (selectedOption == '') {
            alert("Please select an option.");
            return;
        }
        const currentPlate = plates.find(plate => plate.id === questionNumber);

        if (selectedOption == currentPlate.rightAnswer) {
            setCount(prevCount => prevCount + 1);
            setCorrectAnswers(prevAnswers => [...prevAnswers, selectedOption]);
        }
        if (questionNumber < 14) {
            setQuestionNumber(prevNumber => prevNumber + 1);
            // if (selectedOption == plates.find(plate => plate.id === questionNumber)?.rightAnswer) {
            //     setCount(prevCount => prevCount + 1);
            // setCorrectAnswers(prevAnswers => [...prevAnswers, selectedOption]);
            // }
            console.log(count)
            console.log(correctAnswers)
            setMin(min + 1)
            setMax(max + 1)
            setSelectedOption('')
        }
        
    };
    
    const endTest = () => {
        if (selectedOption === '') {
            alert("Please select an option.");
            return;
        }

        const currentPlate = plates.find(plate => plate.id === questionNumber);

        if (selectedOption == currentPlate.rightAnswer) {
            setCount(prevCount => prevCount + 1);
            setCorrectAnswers(prevAnswers => [...prevAnswers, selectedOption]);
        }

        setTimeout(() => {
            const finalCount = count + (selectedOption == currentPlate.rightAnswer ? 1 : 0);
            setAvarage((finalCount / 14) * 100);
            alert(`${Math.floor((finalCount / 14) * 100)}%`);
            setAvarage(0)
        }, 0);
        setMin(0)
        setMax(1)
        setQuestionNumber(1)
    };

    // let check=()=>{
    //     if (selectedOption !== '')
    //     if (selectedOption == plates.find(plate => plate.id === questionNumber)?.rightAnswer ) {
    //         setCount(count + 1);
    //         return;
            
    //     }
        
    // }
    
    // let wtf= useEffect(() => {
    //     console.log(selectedOption)
    //     check()
    //     console.log(count)
    //     // setAvarage(count / 14 * 100)
    // }, [selectedOption])
    
    // useEffect(() => {

    //     setAvarage(count / 14 * 100);
    // }, [count]);
    return (
        <div className={c1.container}>
            <h2>Question {questionNumber} of 14</h2>
            <div className={c1.innercontainer}>
                {
                    plates.map(p => {
                        if (p.id <= max && p.id > min)
                            return (<>< img src={p.path} alt="ishihara plate" />
                                <div className={c1.card}>
                                    <h3>What did the patient see ?</h3>
                                    <form action="" className={c1.form}>
                                        <label for="one"> <input id="one" type="radio" name="option" value={p.option1} onChange={handleOptionChange} /> {p.option1} </label>
                                        <label for="two"> <input id="two" type="radio" name="option" value={p.option2} onChange={handleOptionChange} /> {p.option2} </label>
                                        <label for="three"> <input id="three" type="radio" name="option" value={p.option3} onChange={handleOptionChange} /> {p.option3} </label>
                                        <label for="four"><input id="four" type="radio" name="option" value={p.option4} onChange={handleOptionChange} /> {p.option4} </label>
                                    </form>
                                    {questionNumber == 14 ? <button onClick={endTest}>Finish</button> : <button onClick={changeNumber}>Next</button>}

                                </div>
                            </>)
                    })

                }


            </div>

        </div >
    )
}
