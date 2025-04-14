
import { useState } from 'react';

type AnalysisType = {
  basic: {
    letters: number;
    words: number;
    spaces: number;
    newlines: number;
    specialSymbols: number;
  };
  pronouns: Record<string, number>;
  prepositions: Record<string, number>;
  articles: Record<string, number>;
}

export const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisType | null>(null);

  const analyzeText = () => {
    // Basic counts
    const letters = text.replace(/[^a-zA-Z]/g, '').length;
    const words = text.trim().split(/\s+/).length;
    const spaces = text.split(' ').length - 1;
    const newlines = text.split('\n').length - 1;
    const specialSymbols = text.replace(/[a-zA-Z0-9\s]/g, '').length;

    // Pronouns analysis
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'];
    const pronounCount = text.toLowerCase().split(/\s+/).reduce((acc: Record<string, number>, word) => {
      if (pronouns.includes(word)) {
        acc[word] = (acc[word] || 0) + 1;
      }
      return acc;
    }, {});

    // Prepositions analysis
    const prepositions = ['in', 'on', 'at', 'to', 'for', 'with', 'by', 'about', 'from', 'of'];
    const prepositionCount = text.toLowerCase().split(/\s+/).reduce((acc: Record<string, number>, word) => {
      if (prepositions.includes(word)) {
        acc[word] = (acc[word] || 0) + 1;
      }
      return acc;
    }, {});

    // Articles analysis
    const articles = ['a', 'an'];
    const articleCount = text.toLowerCase().split(/\s+/).reduce((acc: Record<string, number>, word) => {
      if (articles.includes(word)) {
        acc[word] = (acc[word] || 0) + 1;
      }
      return acc;
    }, {});

    setAnalysis({
      basic: { letters, words, spaces, newlines, specialSymbols },
      pronouns: pronounCount,
      prepositions: prepositionCount,
      articles: articleCount
    });
  };

  return (
    <div className="p-6 bg-bg3-dark rounded-lg shadow-xl animate-border-glow backdrop-blur-sm">
      <h2 className="text-2xl font-playfair mb-4 text-bg3-purple">Text Analysis</h2>
      <textarea
        className="w-full h-64 p-4 mb-4 bg-bg3-dark border border-bg3-accent rounded text-bg3-gray"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text (minimum 10000 words)..."
      />
      <button
        onClick={analyzeText}
        className="px-6 py-2 bg-bg3-purple text-white rounded hover:bg-bg3-accent transition-colors relative group overflow-hidden"
      >
        <span className="relative z-10">Analyze Text</span>
        <div className="absolute inset-0 bg-gradient-to-r from-bg3-accent to-bg3-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
        Analyze Text
      </button>
      
      {analysis && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-bg3-dark/50 rounded">
            <h3 className="font-playfair text-bg3-purple mb-2">Basic Analysis</h3>
            <p className="text-bg3-gray">Letters: {analysis.basic.letters}</p>
            <p className="text-bg3-gray">Words: {analysis.basic.words}</p>
            <p className="text-bg3-gray">Spaces: {analysis.basic.spaces}</p>
            <p className="text-bg3-gray">Newlines: {analysis.basic.newlines}</p>
            <p className="text-bg3-gray">Special Symbols: {analysis.basic.specialSymbols}</p>
          </div>
          
          <div className="p-4 bg-bg3-dark/50 rounded">
            <h3 className="font-playfair text-bg3-purple mb-2">Pronouns</h3>
            {Object.entries(analysis.pronouns).map(([pronoun, count]) => (
              <p key={pronoun} className="text-bg3-gray">{pronoun}: {count}</p>
            ))}
          </div>
          
          <div className="p-4 bg-bg3-dark/50 rounded">
            <h3 className="font-playfair text-bg3-purple mb-2">Prepositions</h3>
            {Object.entries(analysis.prepositions).map(([prep, count]) => (
              <p key={prep} className="text-bg3-gray">{prep}: {count}</p>
            ))}
          </div>
          
          <div className="p-4 bg-bg3-dark/50 rounded">
            <h3 className="font-playfair text-bg3-purple mb-2">Indefinite Articles</h3>
            {Object.entries(analysis.articles).map(([article, count]) => (
              <p key={article} className="text-bg3-gray">{article}: {count}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
