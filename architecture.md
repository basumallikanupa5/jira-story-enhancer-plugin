# Architecture

## Components

### Jira Forge UI
Provides issue panel integration directly inside Jira stories.

### Backend Resolver
Handles:
- Prompt engineering
- LLM communication
- Jira payload processing
- Formatting logic

### GPT/LLM Layer
Supports:
- OpenAI GPT
- Azure OpenAI
- Anthropic Claude
- AWS Bedrock models

### Future Enhancements
- Multi-language support
- Story point estimation
- Sprint risk analysis
- AI-powered subtasks
- Technical decomposition
- Epic generation
- Jira workflow intelligence