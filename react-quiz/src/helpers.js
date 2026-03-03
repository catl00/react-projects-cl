export const shuffleAnswers = question => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ]

    return unshuffledAnswers
        .map(unshuffledAnswer => ({
            sort: Math.random(),
            value: unshuffledAnswer
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
};

export const normalizeQuestions = backendQuestions => {
    // Helper to decode HTML entities returned by the OpenTDB API (e.g. &quot;, &#039;)
    const decodeHtml = (html) => {
        // Use the browser DOM to decode HTML entities
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.documentElement.textContent;
    };

    return backendQuestions.map((q) => {
        const incorrectAnswers = q.incorrect_answers.map(ans => decodeHtml(ans));
        return {
            correctAnswer: decodeHtml(q.correct_answer),
            question: decodeHtml(q.question),
            incorrectAnswers,
        };
    });
}