import React, { useState } from 'react';

const FindQuestion = () => {
  const [questions, setQuestions] = useState([
    { id: 1, title: "What is React?", description: "A JavaScript library for building UIs", tag: "React", date: "2023-09-01" },
    { id: 2, title: "How to use state in React?", description: "Understanding state and hooks", tag: "State", date: "2023-09-15" }
  ]);

  const [filter, setFilter] = useState('');
  const [newQuestion, setNewQuestion] = useState({ title: '', description: '', tag: '', date: '' });
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Filter questions by title, tag, or date
  const filteredQuestions = questions.filter(q => 
    q.title.toLowerCase().includes(filter.toLowerCase()) ||
    q.tag.toLowerCase().includes(filter.toLowerCase()) ||
    q.date.includes(filter)
  );

  // Delete a question
  const handleDelete = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  // Add a new question
  const handleAddQuestion = (e) => {
    e.preventDefault();
    const newId = questions.length + 1;
    setQuestions([...questions, { ...newQuestion, id: newId }]);
    setNewQuestion({ title: '', description: '', tag: '', date: '' });
  };

  // Expand or collapse a question card
  const toggleExpand = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id); // Toggle between expanded and collapsed
  };

  return (
    <div className="find-question">
      <h2>Find Questions</h2>
      
      {/* Add New Question Form */}
      <form onSubmit={handleAddQuestion} className="add-question-form">
        <input
          type="text"
          placeholder="Title"
          value={newQuestion.title}
          onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newQuestion.description}
          onChange={(e) => setNewQuestion({ ...newQuestion, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Tag"
          value={newQuestion.tag}
          onChange={(e) => setNewQuestion({ ...newQuestion, tag: e.target.value })}
          required
        />
        <input
          type="date"
          value={newQuestion.date}
          onChange={(e) => setNewQuestion({ ...newQuestion, date: e.target.value })}
          required
        />
        <button type="submit">Add Question</button>
      </form>

      <input
        type="text"
        placeholder="Filter by title, tag, or date"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      
      <div className="question-list">
        {filteredQuestions.map((question) => (
          <div key={question.id} className="question-card">
            <h3 onClick={() => toggleExpand(question.id)}>{question.title}</h3>
            <p>{question.description}</p>
            <p><strong>Tag:</strong> {question.tag}</p>
            <p><strong>Date:</strong> {question.date}</p>

            {/* Conditionally render more details if the question is expanded */}
            {expandedQuestion === question.id && (
              <div className="expanded-details">
                <p>More details about the question can go here.</p>
              </div>
            )}

            <button onClick={() => handleDelete(question.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindQuestion;
