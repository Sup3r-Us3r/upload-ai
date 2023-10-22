import 'dotenv/config';

import { fastify } from 'fastify';

import { fastifyCors } from '@fastify/cors';

import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app.listen({ port: 3330 }).then(() => console.log('HTTP SERVER RUNNING!'));
