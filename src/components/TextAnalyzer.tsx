
import { useState } from 'react';
import { Flame, BookText, FileText, BarChart3, Brain } from 'lucide-react';

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
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeText = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Basic counts
      const letters = text.replace(/[^a-zA-Z]/g, '').length;
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
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
      const articles = ['a', 'an', 'the'];
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
      setIsAnalyzing(false);
    }, 500);
  };

  return (
    <div className="p-6 bg-bg3-dark rounded-lg shadow-xl animate-border-glow backdrop-blur-sm relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10 bg-red-500 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 opacity-10 bg-bg3-purple rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Decorative runes */}
      <div className="absolute top-8 right-8 opacity-20 pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="#9b87f5" strokeWidth="2" />
          <path d="M50 15 L85 50 L50 85 L15 50 Z" fill="none" stroke="#9b87f5" strokeWidth="2" />
          <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="none" stroke="#9b87f5" strokeWidth="2" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-playfair mb-4 text-bg3-purple flex items-center">
        <BookText className="w-6 h-6 mr-2 text-red-400" />
        Text Analysis
      </h2>
      
      <div className="relative">
        <textarea
          className="w-full h-64 p-4 mb-4 bg-bg3-dark border border-bg3-accent rounded text-bg3-gray focus:border-red-400 transition-colors"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text (minimum 10000 words)..."
        />
        
        {/* Word count overlay */}
        {text && (
          <div className="absolute right-3 bottom-8 bg-bg3-dark/80 px-2 py-1 text-xs rounded-md border border-bg3-accent/30">
            {text.trim().split(/\s+/).filter(Boolean).length} words
          </div>
        )}
      </div>
      
      <button
        onClick={analyzeText}
        className="px-6 py-3 bg-bg3-purple text-white rounded hover:bg-bg3-accent transition-colors relative group overflow-hidden"
        disabled={isAnalyzing}
      >
        <span className="relative z-10 flex items-center">
          {isAnalyzing ? (
            <>
              <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Analyzing...
            </>
          ) : (
            <>
              <Brain className="w-5 h-5 mr-2" />
              Analyze Text
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-bg3-accent to-bg3-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
      
      {analysis && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-bg3-dark/50 rounded border border-bg3-accent/20 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5">
              <BarChart3 className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="font-playfair text-bg3-purple mb-2 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-red-400" />
              Basic Analysis
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <div className="p-2 bg-bg3-dark/40 rounded border border-bg3-accent/10 hover:border-red-400/30 transition-colors">
                <p className="text-xs text-bg3-gray/70">Letters</p>
                <p className="text-lg text-bg3-light">{analysis.basic.letters}</p>
              </div>
              <div className="p-2 bg-bg3-dark/40 rounded border border-bg3-accent/10 hover:border-red-400/30 transition-colors">
                <p className="text-xs text-bg3-gray/70">Words</p>
                <p className="text-lg text-bg3-light">{analysis.basic.words}</p>
              </div>
              <div className="p-2 bg-bg3-dark/40 rounded border border-bg3-accent/10 hover:border-red-400/30 transition-colors">
                <p className="text-xs text-bg3-gray/70">Spaces</p>
                <p className="text-lg text-bg3-light">{analysis.basic.spaces}</p>
              </div>
              <div className="p-2 bg-bg3-dark/40 rounded border border-bg3-accent/10 hover:border-red-400/30 transition-colors">
                <p className="text-xs text-bg3-gray/70">Newlines</p>
                <p className="text-lg text-bg3-light">{analysis.basic.newlines}</p>
              </div>
              <div className="p-2 bg-bg3-dark/40 rounded border border-bg3-accent/10 hover:border-red-400/30 transition-colors">
                <p className="text-xs text-bg3-gray/70">Special Symbols</p>
                <p className="text-lg text-bg3-light">{analysis.basic.specialSymbols}</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-bg3-dark/50 rounded border border-bg3-accent/20 h-full">
              <h3 className="font-playfair text-bg3-purple mb-2 flex items-center">
                <Flame className="w-4 h-4 mr-1 text-red-400" />
                Pronouns
              </h3>
              <div className="max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                {Object.entries(analysis.pronouns).length > 0 ? (
                  Object.entries(analysis.pronouns).map(([pronoun, count]) => (
                    <div key={pronoun} className="flex justify-between items-center mb-1 text-bg3-gray border-b border-bg3-accent/10 pb-1">
                      <span>{pronoun}</span>
                      <span className="text-red-400 font-medium">{count}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-bg3-gray/70 italic">No pronouns found</p>
                )}
              </div>
            </div>
            
            <div className="p-4 bg-bg3-dark/50 rounded border border-bg3-accent/20 h-full">
              <h3 className="font-playfair text-bg3-purple mb-2 flex items-center">
                <Flame className="w-4 h-4 mr-1 text-red-400" />
                Prepositions
              </h3>
              <div className="max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                {Object.entries(analysis.prepositions).length > 0 ? (
                  Object.entries(analysis.prepositions).map(([prep, count]) => (
                    <div key={prep} className="flex justify-between items-center mb-1 text-bg3-gray border-b border-bg3-accent/10 pb-1">
                      <span>{prep}</span>
                      <span className="text-red-400 font-medium">{count}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-bg3-gray/70 italic">No prepositions found</p>
                )}
              </div>
            </div>
            
            <div className="p-4 bg-bg3-dark/50 rounded border border-bg3-accent/20 h-full">
              <h3 className="font-playfair text-bg3-purple mb-2 flex items-center">
                <Flame className="w-4 h-4 mr-1 text-red-400" />
                Articles
              </h3>
              <div className="max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                {Object.entries(analysis.articles).length > 0 ? (
                  Object.entries(analysis.articles).map(([article, count]) => (
                    <div key={article} className="flex justify-between items-center mb-1 text-bg3-gray border-b border-bg3-accent/10 pb-1">
                      <span>{article}</span>
                      <span className="text-red-400 font-medium">{count}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-bg3-gray/70 italic">No articles found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
