import React, { useState } from 'react'

const ExcelTesting = () => {
    const [lessonScreen, setLessonScreen] = useState(true);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            text: "To start Key Tips, you press which of the following keys? ",
            options: [
                { id: 0, text: "The CTRL key.", isCorrect: false },
                { id: 1, text: "The SHIFT key.", isCorrect: false },
                { id: 2, text: "The ALT key.", isCorrect: true },
                { id: 3, text: "The TAB key.", isCorrect: false },
            ],
        },
        {
            text: "On the ribbon, which tabs have the commands for basic functions such as SUM and AVG? ",
            options: [
                { id: 0, text: "The Home and Functions tabs.", isCorrect: true },
                { id: 1, text: "The Insert and Data tabs.", isCorrect: false },
                { id: 2, text: "The Quick Access Toolbar and the Data tab.", isCorrect: false },
                { id: 3, text: "All of the above.", isCorrect: false },
            ],
        },
        {
            text: "How to you get to Backstage view?",
            options: [
                { id: 0, text: "Click the Home tab.", isCorrect: false },
                { id: 1, text: "Click Backstage on the View tab.", isCorrect: false },
                { id: 2, text: "Click the File tab.", isCorrect: true },
                { id: 3, text: "All of the Above.", isCorrect: false },
            ],
        },
        {
            text: "To view Excel 2010 files in Excel 2003, you must do which of the following?",
            options: [
                { id: 0, text: "You can't view 2010 files in 2003. You have to convert them all to the 2010 file format.", isCorrect: false },
                { id: 1, text: "Download and install free converters.", isCorrect: true },
                { id: 2, text: "You don't need to do anything. Just open the files.", isCorrect: false },
                { id: 3, text: "None of the Above.", isCorrect: false },
            ],
        },
        {
            text: "Which tab do you use to do math?",
            options: [
                { id: 0, text: "The Formulas tab", isCorrect: false },
                { id: 1, text: "The Home tab", isCorrect: false },
                { id: 2, text: "You can use any tab", isCorrect: true },
                { id: 3, text: "The Math tab", isCorrect: false },
            ],
        },
        //two
        {
            text: "To do math in Excel, start by typing which of the following?",
            options: [
                { id: 0, text: "Parentheses", isCorrect: false },
                { id: 1, text: "Numbers", isCorrect: false },
                { id: 2, text: "An equal sign", isCorrect: true },
                { id: 3, text: "Math", isCorrect: false },
            ],
        },
        {
            text: "To add a new column, click a cell in the column to the left of where you want the new column.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "To add a new row, click a cell in the row immediately below where you want the new row.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "To delete a column or a row, you click in the column or row you want to delete. Then what?",
            options: [
                { id: 0, text: "Press the Delete button", isCorrect: false },
                { id: 1, text: "On the Home tab, in the Cells group, click the Format button.", isCorrect: false },
                { id: 2, text: "On the Home tab, in the Cells group, click the Delete button.", isCorrect: true },
                { id: 3, text: "None of the Above.", isCorrect: false },
            ],
        },
        {
            text: "To print a spreadsheet, what do you do first?",
            options: [
                { id: 0, text: "Click the File tab.", isCorrect: true },
                { id: 1, text: "Right-click in a cell.", isCorrect: false },
                { id: 2, text: "Click the Home tab.", isCorrect: false },
                { id: 3, text: "Click Print", isCorrect: false },
            ],
        },
        {
            text: "You want to type the days of the week. To get Excel to type the list for you, type the first day and move the cursor to the lower-right corner of the cell. Then what?",
            options: [
                { id: 0, text: "Wait until the cursor turns into a white plus sign.", isCorrect: false },
                { id: 1, text: "Right-click the lower-right cell corner.", isCorrect: false },
                { id: 2, text: "Wait until the cursor turns into a black plus sign.", isCorrect: true },
                { id: 3, text: "Drag down", isCorrect: false },
            ],
        },
        //three
        {
            text: "Every formula in Excel starts with an equal sign.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "What is the first rule of math operator precedence?",
            options: [
                { id: 0, text: "Take care of exponents (roots and powers) first.", isCorrect: false },
                { id: 1, text: "Divide before you add.", isCorrect: false },
                { id: 1, text: "Take care of anything in parentheses or brackets first.", isCorrect: true },
                { id: 1, text: "Add first.", isCorrect: false },
            ],
        },
        {
            text: "Which part of this math problem will Excel calculate first: =30/5*3?",
            options: [
                { id: 0, text: "Divide 30/5.", isCorrect: true },
                { id: 1, text: "Multiply 5*3.", isCorrect: false },
            ],
        },
        {
            text: "If you want to add the values that are in cells C1 and C2 (93 and 14), why would you use cell references in the formula (=C1+C2) instead of just writing the formula like this: =93+14?",
            options: [
                { id: 0, text: "The formula is more professional looking.", isCorrect: false },
                { id: 1, text: "The formula will be more accurate.", isCorrect: false },
                { id: 2, text: "The formula result will automatically update when cell values change.", isCorrect: true },
                { id: 3, text: "None of the Above.", isCorrect: false },
            ],
        },
        {
            text: "You've used the SUM function to add the numbers in column C. You want to copy the formula from column C to add the numbers in column D. What kind of cell reference will be in the new formula in column D?",
            options: [
                { id: 0, text: "Absolute.", isCorrect: false },
                { id: 1, text: "Mixed.", isCorrect: false },
                { id: 2, text: "Relative.", isCorrect: true },
                { id: 3, text: "Fixed", isCorrect: false },
            ],
        },
        {
            text: "You can enter formulas at the bottom of columns and at the end of rows.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "You're using the PMT function to figure out the monthly payment on a loan. When you enter the Rate argument (interest rate), you write it like this: 3.5%.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "You can apply conditional formatting to an Excel table, which already has its own formatting.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "When you select a conditional formatting option such as data bars for example, you can only use the samples you see.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "You can always change conditional formatting rules after you apply them.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "To delete conditional formatting, select the cells you want to clear the formatting from, and then what?",
            options: [
                { id: 0, text: "Press Delete.", isCorrect: false },
                { id: 1, text: "On the Home tab, in the Editing group, click Clear Formats.", isCorrect: false },
                { id: 2, text: "On the Home tab, in the Styles group, click Conditional Formatting, click Clear Rules, and then select the appropriate option.", isCorrect: true },
                { id: 3, text: "None of the Above.", isCorrect: false },
            ],
        },
        {
            text: "The lookup_value argument (the value you are searching for) must be in the leftmost column of your list or table.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "What is the table_array argument?",
            options: [
                { id: 0, text: "The lookup table.", isCorrect: false },
                { id: 1, text: "Where you want to search.", isCorrect: false },
                { id: 2, text: "Both of the above.", isCorrect: true },
                { id: 3, text: "None of the above.", isCorrect: false },
            ],
        },
        {
            text: "What is the col_index_num argument?",
            options: [
                { id: 0, text: "The column number for your search result column.", isCorrect: true },
                { id: 1, text: "The column heading for your search result column.", isCorrect: false },
            ],
        },
        {
            text: "The range_lookup argument is either True, or False. With False, you get which of the following?",
            options: [
                { id: 0, text: "An approximate match.", isCorrect: false },
                { id: 1, text: "An exact match.", isCorrect: true },
            ],
        },
        {
            text: "If your range_lookup argument is True, you need to sort the leftmost column in ascending order.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "When you use VLOOKUP, you must do which of the following?",
            options: [
                { id: 0, text: "Have a list or table arranged in vertical columns.", isCorrect: false },
                { id: 1, text: "Use a lookup_value in the leftmost column of the lookup table.", isCorrect: false },
                { id: 2, text: "Use the column number, counting from the left, that contains the search result.", isCorrect: false },
                { id: 3, text: "Indicate whether the range_lookup is True (approximate) or False (exact).", isCorrect: false },
                { id: 4, text: "All of the above.", isCorrect: true },
            ],
        },
        {
            text: "Sparklines change to reflect revised data.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "To delete sparklines, select the cells you want to clear the formatting from, and then press the Delete key on your keyboard.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "You can change a line sparkline to a column sparkline, and vice versa.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "When you add another column after you create sparklines, the sparklines change with the new data.",
            options: [
                { id: 0, text: "You can always do that.", isCorrect: false },
                { id: 1, text: "This is true if your data is in an Excel table.", isCorrect: true },
            ],
        },
        {
            text: "You can sort more than one column at a time.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "You can filter more than one column at a time.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "To fill a formula down a column, you copy and paste it from the first cell into the other cells in the column.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "As you type a formula in a table, to see a list of the column names to enter into the formula, type a parenthesis",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "What does it mean when you see a small upward pointing arrow on the drop-down button at the top of a column?",
            options: [
                { id: 0, text: "The column is filtered.", isCorrect: false },
                { id: 1, text: "The column is sorted.", isCorrect: true },
            ],
        },
        {
            text: "The logical_test argument can only return either True or False.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "In the value_if_true and value_if_false arguments, use quotation marks around numbers.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "How many possible outcomes are there with a single IF statement?",
            options: [
                { id: 0, text: "One", isCorrect: false },
                { id: 1, text: "Two", isCorrect: true },
                { id: 2, text: "Three", isCorrect: false },
                { id: 3, text: "None", isCorrect: false },
            ],
        },
        {
            text: "If you copy a formula down a column, and need a cell reference to stay the same (for example, you don’t want B2 to change to B3), what type of cell reference do you need? ",
            options: [
                { id: 0, text: "Relative", isCorrect: false },
                { id: 1, text: "Absolute", isCorrect: true },
            ],
        },
        {
            text: "You create a chart. But later on you don't see the Chart Tools. What do you do to get them back?",
            options: [
                { id: 0, text: "Create another chart.", isCorrect: false },
                { id: 1, text: "Click the Insert tab.", isCorrect: false },
                { id: 2, text: "Click inside the chart.", isCorrect: true },
                { id: 3, text: "None of above", isCorrect: false },
            ],
        },
        {
            text: "You can't change the chart type after you create a chart.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "You've created a chart. Now you need to compare data another way. To do this, create a second chart.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "What must you do to refresh a chart when you revise the spreadsheet data that the chart displays?",
            options: [
                { id: 0, text: "Press SHIFT+CTRL.", isCorrect: false },
                { id: 1, text: "Nothing.", isCorrect: true },
                { id: 2, text: "Press F6.", isCorrect: false },
                { id: 3, text: "Press F5.", isCorrect: false },
            ],
        },
        {
            text: "Other than the pie shape, there's no difference between a column and a pie shape. ",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "8/22/2011 and 22-August-2011 are stored as different serial numbers.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "To get Excel to recognize dates, you must type them in a format Excel recognizes. Which of these dates will Excel store as plain text rather than as a serial number?",
            options: [
                { id: 0, text: "June 23, 2012", isCorrect: false },
                { id: 1, text: "23-June-12", isCorrect: false },
                { id: 2, text: "June 23 2012", isCorrect: true },
            ],
        },
        {
            text: "Which function would you use to find the date that falls after a number of workdays?",
            options: [
                { id: 0, text: "NETWORKDAYS", isCorrect: false },
                { id: 1, text: "WORKDAY", isCorrect: true },
                { id: 1, text: "TODAY", isCorrect: false },
            ],
        },
        {
            text: "What do you type to start a formula in Excel?",
            options: [
                { id: 0, text: "A function.", isCorrect: false },
                { id: 1, text: "Mathematical operators.", isCorrect: false },
                { id: 2, text: "An equal sign (=)", isCorrect: true },
                { id: 3, text: "None of Above.", isCorrect: false },
            ],
        },
        {
            text: "How do you separate formula arguments?",
            options: [
                { id: 0, text: "With parentheses.", isCorrect: false },
                { id: 1, text: "With a space.", isCorrect: false },
                { id: 2, text: "With a comma.", isCorrect: true },
                { id: 3, text: "None", isCorrect: false },
            ],
        },
    ];

    const selectQuestions = [];

    const randomQuestions = (arr) => {        
        for (let i = 0; i < 5; i++) {
            let count = Math.floor(Math.random() * questions.length)
            selectQuestions.push(questions[count])
        }       
    }
    randomQuestions(questions)

    const optionClicked = (isCorrect) => {
        if (lessonScreen) {
            if (isCorrect && score <= selectQuestions.length - 1) {
                setScore(score + 1)
            }
            if (currentQuestion + 1 < selectQuestions.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setLessonScreen(false);
            }
        }
    };

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setLessonScreen(true);
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 text-light">
                    {lessonScreen &&
                        (<>
                            <span className='' >{currentQuestion + 1} out of {selectQuestions.length}</span>
                            <h6 className=''>{selectQuestions[currentQuestion].text}</h6>
                            <div className=''>
                                {selectQuestions[currentQuestion].options.map(option => {
                                    return (
                                        <button onClick={() => optionClicked(option.isCorrect)} key={option.id} className='btn text-start btn-outline-light m-1 microsoft-btn'><small> {option.text} </small></button>
                                    )
                                })}
                            </div>
                            <h6 className='mt-2'>Current Score: {score} out of {selectQuestions.length}</h6>
                        </>)
                    }
                    {!lessonScreen &&
                        (<>
                            <h5 className=''>Final Score {(score / selectQuestions.length) * 100}%</h5>
                            <button onClick={() => restartGame()} className='btn btn-outline-light'>Restart Quiz</button>
                        </>)}
                </div>
            </div>
        </div>
    )
}

export default ExcelTesting