import Resolver from '@forge/resolver';
import api, { storage } from '@forge/api';
import OpenAI from 'openai';

const resolver = new Resolver();

resolver.define('enhanceStory', async ({ payload }) => {
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
You are an expert Agile Product Owner and Jira story optimization assistant.

Improve and restructure the following Jira story.

Requirements:
- Rewrite professionally
- Improve clarity
- Generate detailed acceptance criteria
- Add business context
- Improve formatting
- Ensure agile best practices

Story:
${payload.story}
`;

    const response = await client.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
            {
                role: "system",
                content: "You are an Agile transformation and Jira optimization assistant."
            },
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.4
    });

    return response.choices[0].message.content;
});

export const handler = resolver.getDefinitions();