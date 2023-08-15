import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface SyntaxHighlighterProps {
    language: string;
    code: string;
}

export function Snippet({ language, code }: SyntaxHighlighterProps) {
    const [copy, setCopy] = useState(false)
    return (
        <div className="snippet-container">
            <div className="snippet-header">
                <span>{language}</span>
                {copy ? (
                    <span className="copy"><FaCheck />Copied</span>
                ) :
                    <span className="copy" onClick={() => {
                        navigator.clipboard.writeText(code)
                        setCopy(true)
                        setTimeout(() => {
                            setCopy(false)
                        }, 3000);
                    }}><FaCopy />Copy</span>
                }
            </div>
            <SyntaxHighlighter language={language} style={atomOneDark}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
