export interface ILlmProvider {
  prioritizeTask(tasks: any[]): Promise<any[]>;
  suggestTasks(tasks: any[]): Promise<any[]>;
}
