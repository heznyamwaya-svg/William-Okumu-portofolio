import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { CV_DATA } from '../constants';
import { cn } from '../lib/utils';

export default function AIWilliam() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenAI(import.meta.env.VITE_GEMINI_API_KEY || '');
      const systemInstruction = `You are William AI, a futuristic digital assistant representing William Okumu.
William is an Advocate of the High Court of Kenya and a Somatic Experiencing Practitioner.
He has 16 years of experience in legal aid, justice reform, and trauma-informed legal services.

Information about William:
- Specialization: Legal Advocacy and Trauma Therapy (Somatic Experiencing).
- Experience: Justice Defenders (various roles), Kituo Cha Sheria.
- Landmarks: Assisted in the Muruatetu case which declared mandatory death sentences unconstitutional.
- Education: LLB from University of London, KSL Advocate (2024).
- Personal Vibe: Professional, empathic, futuristic, and justice-driven.

Rules:
- Be concise and professional.
- If asked about non-William topics, politely redirect to his expertise.
- Use a bit of "futuristic" tone but remain authentic to a legal professional.
CV Data context: ${JSON.stringify(CV_DATA)}`;

      const model = genAI.getGenerativeModel({ 
        model: 'gemini-1.5-flash',
        systemInstruction: systemInstruction
      });

      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', text: text || 'I am processing your request. Please wait.' }]);
    } catch (error: any) {
      console.error("Error generating content:", error);
      let errorMessage = 'I encountered a temporal rift. Please try again soon.';

      if (error instanceof Error) {
        if (error.message.includes("API key not valid")) {
          errorMessage = "It seems my connection to the knowledge network is offline. Please ensure the API key is valid.";
        } else if (error.message.includes("blocked")) {
          errorMessage = "My response was blocked due to safety concerns. Please rephrase your query.";
        } else if (error.message.includes("rate limit") || error.message.includes("quota")) {
          errorMessage = "My processing capacity is currently exceeded. Please try again later.";
        } else {
          errorMessage = `An unexpected issue occurred: ${error.message}. Please try again.`;
        }
      } else if (typeof error === 'string') {
        errorMessage = `An unexpected issue occurred: ${error}. Please try again.`;
      }

      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-8 z-50 p-4 rounded-full bg-luxury-black text-white shadow-lg shadow-black/20 flex items-center gap-2 group overflow-hidden"
      >
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap overflow-hidden font-bold">
          Counsel AI
        </span>
        <MessageSquare className="w-6 h-6 text-luxury-gold" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-20 right-8 z-50 w-[400px] max-w-[90vw] h-[550px] max-h-[80vh] glass rounded-3xl flex flex-col overflow-hidden shadow-2xl border-luxury-gold/20"
          >
            <div className="p-4 border-b border-luxury-gold/10 flex justify-between items-center bg-luxury-gold/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center border border-luxury-gold/30">
                  <Bot className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-luxury-black">Counsel AI</h3>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-luxury-gray hover:text-luxury-black transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} data-lenis-prevent className="flex-1 overflow-y-auto p-4 space-y-4 chat-scrollbar">
              {messages.length === 0 && (
                <div className="text-center py-12 space-y-4">
                  <Bot className="w-12 h-12 text-luxury-gold/20 mx-auto" />
                  <p className="text-sm text-luxury-gray text-balance px-4">
                    Welcome. I am the digital steward of Counselor William's journey. How may I assist your inquiry?
                  </p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "px-4 py-3 rounded-2xl text-sm prose prose-p:my-0",
                    msg.role === 'user' ? "bg-luxury-gold text-white rounded-tr-none" : "bg-white border border-luxury-black/5 rounded-tl-none shadow-sm text-luxury-black"
                  )}>
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                  <span className="text-[10px] mt-1 text-luxury-gray uppercase tracking-tighter">
                    {msg.role === 'user' ? 'Client' : 'Counsel AI'}
                  </span>
                </motion.div>
              ))}
              {messages.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center pt-8 pb-4"
                >
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 rounded-full border border-luxury-gold/20 text-[9px] font-mono uppercase tracking-[0.4em] text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all shadow-lg"
                  >
                    Close Consultation
                  </button>
                </motion.div>
              )}
              {isLoading && (
                <div className="flex items-center gap-2 text-luxury-gold animate-pulse pl-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold delay-150" />
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-white/80 backdrop-blur-sm border-t border-luxury-gold/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Inquire with Counsel..."
                className="flex-1 bg-luxury-white border border-luxury-gold/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors text-luxury-black"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-xl bg-luxury-black text-white disabled:opacity-50 transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
