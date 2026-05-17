# Jira GPT Story Enhancer Plugin

An Atlassian Jira Forge plugin that uses GPT/LLM models to:

- Improve Jira story descriptions
- Generate acceptance criteria
- Restructure poorly written user stories
- Create standardized agile formatting
- Enhance clarity and business context
- Generate implementation suggestions

## Features

- Jira issue panel integration
- GPT/LLM API integration
- Prompt engineering layer
- Structured agile story generation
- Acceptance criteria auto-generation
- Rewrite and optimization support
- Secure API token configuration

## Stack

- Atlassian Forge
- React
- Node.js
- OpenAI-compatible LLM APIs

## Setup

### Install Forge CLI

```bash
npm install -g @forge/cli
```

### Login

```bash
forge login
```

### Install dependencies

```bash
npm install
```

### Deploy

```bash
forge deploy
```

### Install into Jira

```bash
forge install
```

## Configure Environment Variable

```bash
forge variables set OPENAI_API_KEY your_key_here
```

## Run Tunnel

```bash
forge tunnel
```