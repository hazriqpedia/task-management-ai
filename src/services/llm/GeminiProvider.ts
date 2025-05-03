import { ILlmProvider } from "./IllmProvider";

export class GeminiProvider implements ILlmProvider {
  async prioritizeTask(tasks: any[]): Promise<any[]> {
    const prompt = ``;
    const result = callGemini(prompt);
  }

  async suggestTasks(tasks: any[]): Promise<any[]> {
    const prompt = ``;
    const result = callGemini(prompt);
  }

  async callGemini(prompt: string) {
    // Call Gemini API here
  }
}
