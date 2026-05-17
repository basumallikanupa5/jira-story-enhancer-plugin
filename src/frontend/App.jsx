import React, { useState } from 'react';
import { invoke } from '@forge/bridge';

export default function App() {
    const [story, setStory] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const enhanceStory = async () => {
        setLoading(true);

        const result = await invoke('enhanceStory', {
            story
        });

        setResponse(result);
        setLoading(false);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>GPT Jira Story Enhancer</h1>

            <textarea
                rows={12}
                style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px'
                }}
                placeholder="Paste Jira story description here..."
                value={story}
                onChange={(e) => setStory(e.target.value)}
            />

            <button
                onClick={enhanceStory}
                style={{
                    marginTop: '16px',
                    padding: '12px 18px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}
            >
                {loading ? 'Enhancing...' : 'Enhance Story'}
            </button>

            <div
                style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: '#f4f5f7',
                    borderRadius: '8px',
                    whiteSpace: 'pre-wrap'
                }}
            >
                {response}
            </div>
        </div>
    );
}