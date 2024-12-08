import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  SAMPLE_ENV_VAR: z.string().transform(Number),
});

export const config = envSchema.parse(process.env);