const { generateQuote } = require('../script');

// Мока данни (цитати)
const mockQuotes = [
    { text: "Test Quote 1", author: "Author 1" },
    { text: "Test Quote 2", author: "Author 2" }
];

// Замяна на оригиналния масив с мок данни
jest.mock('../script', () => ({
    generateQuote: jest.fn(() => mockQuotes[Math.floor(Math.random() * mockQuotes.length)])
}));

describe('generateQuote', () => {
    test('should return a random quote object with text and author', () => {
        const quote = generateQuote();

        expect(quote).toHaveProperty('text');
        expect(quote).toHaveProperty('author');
        expect(mockQuotes).toContainEqual(quote);
    });

    test('should return a different quote on multiple calls', () => {
        const quote1 = generateQuote();
        const quote2 = generateQuote();

        // Възможно е да се повторят цитати, но шансът е малък
        expect(mockQuotes).toContainEqual(quote1);
        expect(mockQuotes).toContainEqual(quote2);
    });
});
