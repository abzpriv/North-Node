import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Quiz {
  quizName: string;
  questions: Question[];
}

interface Lesson {
  name: string;
  videoUrl: string;
  description: string;
}

const CourseTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lessons' | 'quizzes'>('lessons');
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLessonEditable, setIsLessonEditable] = useState<boolean[]>([]);
  const [isQuizEditable, setIsQuizEditable] = useState<boolean[]>([]);
  const [isLessonsSaved, setIsLessonsSaved] = useState<boolean>(false);
  

  const addLesson = () => {
    setLessons([...lessons, { name: '', videoUrl: '', description: '' }]);
    setIsLessonEditable([...isLessonEditable, true]);
    setIsLessonsSaved(false); 
  };

  const addQuiz = () => {
    setQuizzes([
      ...quizzes,
      {
        quizName: '',
        questions: Array(10).fill({ question: '', options: [''], correctAnswer: '' }),
      },
    ]);
    setIsQuizEditable([...isQuizEditable, true]);
  };

  const handleLessonChange = (index: number, field: keyof Lesson, value: string) => {
    const updatedLessons = [...lessons];
    updatedLessons[index][field] = value;
    setLessons(updatedLessons);
  };

  const handleQuestionChange = (
    quizIndex: number,
    questionIndex: number,
    field: keyof Question,
    value: string | string[]
  ) => {
    const updatedQuizzes = [...quizzes];

    if (field === 'options') {
      updatedQuizzes[quizIndex].questions[questionIndex][field] = value as string[];
    } else {
      updatedQuizzes[quizIndex].questions[questionIndex][field] = value as string;
    }

    setQuizzes(updatedQuizzes);
  };

  const addOption = (quizIndex: number, questionIndex: number) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[quizIndex].questions[questionIndex].options.push('');
    setQuizzes(updatedQuizzes);
  };
   const removeLesson = (index: number) => {
    const updatedLessons = lessons.filter((_, i) => i !== index);
    const updatedIsLessonEditable = isLessonEditable.filter((_, i) => i !== index);
  
    setLessons(updatedLessons);
    setIsLessonEditable(updatedIsLessonEditable);
    setIsLessonsSaved(false); 
  };


  const handleOptionChange = (
    quizIndex: number,
    questionIndex: number,
    optionIndex: number,
    value: string
  ) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[quizIndex].questions[questionIndex].options[optionIndex] = value;
    setQuizzes(updatedQuizzes);
  };

  const saveLessons = () => {
    console.log("Saved Lessons:", lessons);
    setIsLessonEditable(Array(lessons.length).fill(false));
    setIsLessonsSaved(true); 
  };

  const saveQuizzes = () => {
    console.log("Saved Quizzes:", quizzes);
    setIsQuizEditable(Array(quizzes.length).fill(false));
  };

  const editLesson = (index: number) => {
    const updatedEditable = [...isLessonEditable];
    updatedEditable[index] = true;
    setIsLessonEditable(updatedEditable);
    setIsLessonsSaved(false); 
  };

  const editQuiz = (index: number) => {
    const updatedEditable = [...isQuizEditable];
    updatedEditable[index] = true;
    setIsQuizEditable(updatedEditable);
  };
  

  return (
    <div className="bg-[#2c2a2a] p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setActiveTab('lessons')}
          className={`py-2 px-4 rounded-lg ${activeTab === 'lessons' ? 'bg-customGold text-black' : 'bg-transparent text-white'} transition-all duration-300`}
        >
          Lessons
        </button>
        {/* <button
          onClick={() => setActiveTab('quizzes')}
          className={`py-2 px-4 rounded-lg ${activeTab === 'quizzes' ? 'bg-customGold text-black' : 'bg-transparent text-white'} transition-all duration-300`}
        >
          Quizzes
        </button> */}
      </div>

      {activeTab === 'lessons' && (
        <div className="p-4">
          <h2 className="text-2xl text-customGold mb-4">Manage Lessons</h2>
          {lessons.map((lesson, index) => (
            <div key={index} className="mb-4 border-b border-gray-600 pb-4">
              <input
                type="text"
                value={lesson.name}
                onChange={(e) => handleLessonChange(index, 'name', e.target.value)}
                className="w-full p-2 bg-[#3a3838] text-white rounded-lg mb-2"
                placeholder="Lesson Name"
                disabled={!isLessonEditable[index]}
              />
              <input
                type="text"
                value={lesson.videoUrl}
                onChange={(e) => handleLessonChange(index, 'videoUrl', e.target.value)}
                className="w-full p-2 bg-[#3a3838] text-white rounded-lg mb-2"
                placeholder="Video URL"
                disabled={!isLessonEditable[index]}
              />
              <textarea
                value={lesson.description}
                onChange={(e) => handleLessonChange(index, 'description', e.target.value)}
                className="w-full p-2 bg-[#3a3838] text-white rounded-lg mb-2"
                placeholder="Lesson Description"
                rows={3}
                style={{ minHeight: '80px', maxHeight: '150px' }} 
                disabled={!isLessonEditable[index]}
              />
              <div className="flex flex-col sm:flex-row sm:items-center">
                {!isLessonEditable[index] ? (
                  <button
                    onClick={() => editLesson(index)}
                    className="bg-gray-700 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-lg hover:bg-gray-600 transition mb-2 sm:mb-0 sm:mr-2"
                  >
                    Edit Lesson
                  </button>
                ) : null}
                <button
                  onClick={() => removeLesson(index)}
                  className="bg-red-600 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-lg hover:bg-red-500 transition"
                >
                  Remove Lesson
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addLesson}
            className="bg-customGold text-black py-1 px-2 sm:py-2 sm:px-4 rounded-lg hover:bg-[#c79100] transition mt-4"
          >
            Add Lesson
          </button>
          {lessons.length > 0 && !isLessonsSaved && (
            <button
              onClick={saveLessons}
              className="bg-gray-700 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-lg hover:bg-gray-600 transition mt-4"
            >
              Save Lessons
            </button>
          )}
        </div>
      )}
 



      {/* {activeTab === 'quizzes' && (
        <div>
          <h2 className="text-2xl text-customGold mb-4">Manage Quizzes</h2>
          {quizzes.map((quiz, quizIndex) => (
            <div key={quizIndex} className="mb-4 border-b border-gray-600 pb-4">
              <input
                type="text"
                value={quiz.quizName}
                onChange={(e) => {
                  const updatedQuizzes = [...quizzes];
                  updatedQuizzes[quizIndex].quizName = e.target.value;
                  setQuizzes(updatedQuizzes);
                }}
                className="w-full p-2 bg-[#3a3838] text-white rounded-lg mb-2"
                placeholder="Quiz Name"
                disabled={!isQuizEditable[quizIndex]}
              />
              {quiz.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="mb-2">
                  <input
                    type="text"
                    value={question.question}
                    onChange={(e) => handleQuestionChange(quizIndex, questionIndex, 'question', e.target.value)}
                    className="w-full p-2 bg-[#3a3838] text-white rounded-lg mb-1"
                    placeholder={`Question ${questionIndex + 1}`}
                    disabled={!isQuizEditable[quizIndex]}
                  />
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center mb-1">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(quizIndex, questionIndex, optionIndex, e.target.value)}
                        className="w-full p-2 bg-[#3a3838] text-white rounded-lg mr-2"
                        placeholder={`Option ${optionIndex + 1}`}
                        disabled={!isQuizEditable[quizIndex]}
                      />
                    </div>
                  ))}
                  {isQuizEditable[quizIndex] && (
                    <button
                      onClick={() => addOption(quizIndex, questionIndex)}
                      className="bg-customGold text-black py-1 px-2 rounded-lg hover:bg-[#c79100] transition"
                    >
                      Add Option
                    </button>
                  )}
                  <input
                    type="text"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(quizIndex, questionIndex, 'correctAnswer', e.target.value)}
                    className="w-full p-2 bg-[#3a3838] text-white rounded-lg mb-2"
                    placeholder="Correct Answer"
                    disabled={!isQuizEditable[quizIndex]}
                  />
                </div>
              ))}
              {!isQuizEditable[quizIndex] ? (
                <button
                  onClick={() => editQuiz(quizIndex)}
                  className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
                >
                  Edit Quiz
                </button>
              ) : null}
            </div>
          ))}
          <button
            onClick={addQuiz}
            className="bg-customGold text-black py-2 px-4 rounded-lg hover:bg-[#c79100] transition"
          >
            Add Quiz
          </button>
          {quizzes.length > 0 && (
            <button
              onClick={saveQuizzes}
              className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition mt-4"
            >
              Save Quizzes
            </button>
          )}
        </div>
      )} */}
    </div>
  );
};

export default CourseTabs;
