# upload-ai

This application converts mp4 videos to mp3 using the browser, transcribes the video using the OpenAI API, and generates a title and description based on the video provided

## Functional requirements

- [x] Should be able get all prompts
- [x] Should be able upload videos
- [x] Should be able get video transcription
- [x] Should be able get video transcript summary

## Non-functional requirements

- [x] The video must be a maximum of 25mb
- [x] The video must be sent in .mp4
- [x] The video must be converted to .mp3
- [x] Application data must be stored in SQLite

## Routes

- List all prompts

```bash
GET /prompts
```

- Upload video

```bash
POST /videos
```

- Create transcription

```bash
POST /videos/:videoId/transcription
```

- Generate video transcript summary

```bash
POST /ai/completion
```

## Run app

### Install dependencies:

```bash
$ pnpm i
```

### Start app

```bash
$ pnpm dev
```

## Run API

### Install dependencies:

```bash
$ pnpm i
```

### Run migration

```bash
$ pnpm prisma migrate dev
```

### Update env

```bash
$ cp .env.example .env
```

> Update the `OPENAI_KEY` value, get this value here: https://platform.openai.com/account/api-keys

### Start API

```bash
$ pnpm dev
```
