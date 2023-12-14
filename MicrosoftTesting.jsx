import React, { useState } from 'react'

const MicrosoftTesting = () => {
    const [lessonScreen, setLessonScreen] = useState(true);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            text: "Where is the Quick Access Toolbar, and when should you use it?",
            options: [
                { id: 0, text: "In the upper-left corner of the screen, and you should use it for your favorite commands.", isCorrect: true },
                { id: 1, text: "It floats above your text, and you should use it when you need to make formatting changes.", isCorrect: false },
                { id: 2, text: "In the upper-left corner of the screen, and you should use it when you need to quickly access a document.", isCorrect: false },
                { id: 3, text: "On the Home tab, and you should use it when you need to quickly launch or start a new document.", isCorrect: false },
            ],
        },
        {
            text: "When will the Mini toolbar appear?",
            options: [
                { id: 0, text: "When you double-click the active tab on the ribbon.", isCorrect: false },
                { id: 1, text: "When you select text.", isCorrect: false },
                { id: 2, text: "When you select text and then point at it.", isCorrect: true },
                { id: 3, text: "Any of the above.", isCorrect: false },
            ],
        },
        {
            text: "You can apply bulleted lists by using which tab in which group?",
            options: [
                { id: 0, text: "The Page Layout tab, Paragraph group.", isCorrect: false },
                { id: 1, text: "The Home tab, Paragraph group.", isCorrect: true },
                { id: 2, text: "The Insert tab, Symbols group.", isCorrect: false },
                { id: 3, text: "The Insert tab, Text group.", isCorrect: false },
            ],
        },
        {
            text: "In Word 2010, how do you choose settings for features like document display, proofing, and language?",
            options: [
                { id: 0, text: "On the Tools menu, click Options.", isCorrect: false },
                { id: 1, text: "On the File tab, click Options.", isCorrect: true },
                { id: 2, text: "Right-click anywhere on the ribbon and choose Options.", isCorrect: false },
                { id: 3, text: "On the View tab, click Properties.", isCorrect: false },
            ],
        },
        {
            text: "Your friend sent you a Word 2000 document as an e-mail attachment. Can you open the attachment in the new version of Word?",
            options: [
                { id: 0, text: "Yes, but you'll get a warning telling you to get a converter.", isCorrect: false },
                { id: 1, text: "Yes, but the document will open in Compatibility Mode.", isCorrect: true },
                { id: 2, text: "Yes, if you first turn on Compatibility Mode with the Quick Access Toolbar.", isCorrect: false },
                { id: 3, text: "No, only files from Word 2002 and later can be opened in the new version of Word.", isCorrect: false },
            ],
        },
        // Second
        {
            text: "When should you save your document?",
            options: [
                { id: 0, text: "Soon after you begin working.", isCorrect: true },
                { id: 1, text: "When you are through typing it.", isCorrect: false },
                { id: 2, text: "It doesn't matter.", isCorrect: false },
                { id: 3, text: "Right after the document opens.", isCorrect: false },
            ],
        },
        {
            text: "Word puts a red underline beneath text if it is misspelled?",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "As you type, press Enter to move from one line to the next?",
            options: [
                { id: 0, text: "True.", isCorrect: false },
                { id: 1, text: "False.", isCorrect: true },
            ],
        },
        {
            text: "To delete text, what's the first thing you do?",
            options: [
                { id: 0, text: "Press DELETE.", isCorrect: false },
                { id: 1, text: "Press BACKSPACE.", isCorrect: false },
                { id: 2, text: "Select the text you want to delete.", isCorrect: true },
                { id: 3, text: "Press Ctrl Alt Delete.", isCorrect: false },
            ],
        },
        {
            text: "You want to add emphasis to a few words of text. What's the first step?",
            options: [
                { id: 0, text: "Select the text you want to format and then click the bold button in the font group.", isCorrect: true },
                { id: 1, text: "On the Home tab, in the Font group, click bold.", isCorrect: false },
                { id: 2, text: "Type very hard.", isCorrect: false },
                { id: 3, text: "Hold down Ctrl as you type.", isCorrect: false },
            ],
        },
        //third
        {
            text: "To move through a document, you must press the Down Arrow key to get from the top to bottom of document?",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "Press the BACKSPACE key to remove extra formatting marks?",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "To move text from one location to another, copy the text?",
            options: [
                { id: 0, text: "True.", isCorrect: false },
                { id: 1, text: "False.", isCorrect: true },
            ],
        },
        {
            text: "After you've cut text, you can't get it back?",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "What is the keyboard shortcut to undo?",
            options: [
                { id: 0, text: "Ctrl + Alt + Z", isCorrect: false },
                { id: 1, text: "Ctrl + C", isCorrect: false },
                { id: 2, text: "Ctrl + Z", isCorrect: true },
                { id: 3, text: "Ctrl + Shift + A", isCorrect: false },
            ],
        },
        //fourth
        {
            text: "How do you open the Navigation Pane?",
            options: [
                { id: 0, text: "On the View tab on the ribbon, select the Navigation Pane check box.", isCorrect: true },
                { id: 1, text: "On the Review tab on the ribbon, click Reviewing Pane.", isCorrect: false },
                { id: 2, text: "Press CTRL+H.", isCorrect: true },
                { id: 3, text: "On the Page Layout tab on the ribbon, click Page Setup.", isCorrect: true },
            ],
        },
        {
            text: "You use the Navigation Pane only for viewing the arrangement of headings and pages in your document.?",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        {
            text: "What's required in order for headings to appear in the heading view of the Navigation Pane?",
            options: [
                { id: 0, text: "Headings must have bold formatting or some other character formatting to indicate emphasis.", isCorrect: false },
                { id: 1, text: "Any bulleted text will appear in the list of headings in the Navigation Pane.", isCorrect: false },
                { id: 2, text: "The headings must have heading styles applied.", isCorrect: true },
                { id: 3, text: "Any of the above.", isCorrect: false },
            ],
        },
        {
            text: "What's a quick way to add a new section?",
            options: [
                { id: 0, text: "Copy & paste heading & content that look same as what you want new section to look like & replace text with new material.", isCorrect: false },
                { id: 1, text: "In Navigation Pane, right-click heading you want or follow new section heading, & click New Heading Before or After.", isCorrect: true },
                { id: 2, text: "In the Navigation Pane, right-click a heading and then click Demote.", isCorrect: false },
                { id: 3, text: "On the Insert tab, click Header.", isCorrect: false },
            ],
        },
        {
            text: "You can only search for text in a Word 2010 document.",
            options: [
                { id: 0, text: "True", isCorrect: false },
                { id: 1, text: "False", isCorrect: true },
            ],
        },
        //fifth
        {
            text: "On the ribbon, on the Home tab, in what group is the Text Effects button located? ",
            options: [
                { id: 0, text: "The Styles group.", isCorrect: false },
                { id: 1, text: "The Paragraph group.", isCorrect: false },
                { id: 2, text: "The Font group.", isCorrect: true },
                { id: 3, text: "The Drawing group", isCorrect: false },
            ],
        },
        {
            text: "You apply a text effect you like to the title of your document. How do you update existing Title style to match new look you created?",
            options: [
                { id: 0, text: "Select document title with text effect. In Styles group, right-click Title style, click Update Title to Match Selection.", isCorrect: true },
                { id: 1, text: "Click the Text Effects button and then click Update to Match Selection.", isCorrect: false },
                { id: 2, text: "Select document title with text effect. In Styles group, right-click Title style then click Modify.", isCorrect: false },
                { id: 3, text: "Hightlight text then right-click and click paste", isCorrect: false },
            ],
        },
        {
            text: "How do you get the Picture Tools to appear on the ribbon? ",
            options: [
                { id: 0, text: "Click the View tab.", isCorrect: false },
                { id: 1, text: "Select text in your document and then click the Home tab.", isCorrect: false },
                { id: 2, text: "Select an image (photograph, clip art, screenshot, or screen clipping) in your document.", isCorrect: true },
                { id: 3, text: "Any of the above.", isCorrect: false },
            ],
        },
        {
            text: "You want to change the color of an image in your document, which button on the Picture Tools should you click? ",
            options: [
                { id: 0, text: "The Corrections button.", isCorrect: false },
                { id: 1, text: "The Color button.", isCorrect: true },
                { id: 2, text: "The Artistic Effects button.", isCorrect: false },
                { id: 3, text: "The Style button.", isCorrect: false },
            ],
        },
        {
            text: "On the Insert tab, if you want to insert a screen clipping in your document, which button do you click? ",
            options: [
                { id: 0, text: "The Clip Art button.", isCorrect: false },
                { id: 1, text: "The Screenshot button.", isCorrect: true },
                { id: 2, text: "The Picture button.", isCorrect: false },
                { id: 3, text: "None of the above", isCorrect: false },
            ],
        },
        {
            text: "In the SmartArt Tools on the ribbon, where can you see the different SmartArt graphics that are available?",
            options: [
                { id: 0, text: "On the Format tab under SmartArt Tools, in the Shape Styles group.", isCorrect: false },
                { id: 1, text: "On the Design tab under SmartArt Tools, in the Layouts group.", isCorrect: true },
                { id: 2, text: "On the Design tab under SmartArt Tools, in the SmartArt Styles group.", isCorrect: false },
                { id: 3, text: "None of the above", isCorrect: false },
            ],
        },
        //sixth
        {
            text: "Which tab, besides Header & Footer Tools Design tab, has Page Number, Header, & Footer galleries, Quick Parts, & Date & Time command? ",
            options: [
                { id: 0, text: "The Home tab", isCorrect: false },
                { id: 1, text: "The Insert tab.", isCorrect: true },
                { id: 2, text: "The Page Layout tab.", isCorrect: false },
                { id: 3, text: "None of the above", isCorrect: false },
            ],
        },
        {
            text: "What's a main benefit of using a gallery style to apply a page number, header, or footer?",
            options: [
                { id: 0, text: "It lets you type in text of your own.", isCorrect: false },
                { id: 1, text: "It will set up your headers and footers for odd- and even-facing pages.", isCorrect: false },
                { id: 2, text: "It supplies the content and design of the header or footer.", isCorrect: true },
                { id: 3, text: "None of the above", isCorrect: false },
            ],
        },
        {
            text: "If you're building header & footer content yourself & want to open the Field dialog box, which command do you start with?",
            options: [
                { id: 0, text: "The Header command.", isCorrect: false },
                { id: 1, text: "The Quick Parts command.", isCorrect: true },
                { id: 2, text: "The Page Number command.", isCorrect: false },
                { id: 3, text: "The Settings Command", isCorrect: false },
            ],
        },
        {
            text: "When inserting content into header/footer, you need to position cursor where you want content to go. What's the best command/key to use? ",
            options: [
                { id: 0, text: "The Insert Alignment Tab command.", isCorrect: true },
                { id: 1, text: "The Align command.", isCorrect: false },
                { id: 2, text: "The TAB key.", isCorrect: false },
                { id: 3, text: "The mouse.", isCorrect: false },
            ],
        },
        {
            text: "If you’ve inserted art into a header and want to move it around outside the text line, which menu should you look for?",
            options: [
                { id: 0, text: "The Align menu.", isCorrect: false },
                { id: 1, text: "The Artistic Effects menu.", isCorrect: false },
                { id: 2, text: "The Wrap Text menu.", isCorrect: true },
                { id: 3, text: "The Style menu", isCorrect: false },
            ],
        },
        {
            text: "The “remove” command on the Page Number, Header, & Footer galleries tends to work best for content that was added using a gallery style.",
            options: [
                { id: 0, text: "True", isCorrect: true },
                { id: 1, text: "False", isCorrect: false },
            ],
        },
        {
            text: "To create varying headers and footers between document sections, you need to insert section breaks, and then do what? ",
            options: [
                { id: 0, text: "Select the Different First Page command.", isCorrect: false },
                { id: 1, text: "Break the links between sections.", isCorrect: true },
                { id: 2, text: "Select the Different Odd and Even Pages command.", isCorrect: false },
                { id: 3, text: "None of the above", isCorrect: false },
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

export default MicrosoftTesting