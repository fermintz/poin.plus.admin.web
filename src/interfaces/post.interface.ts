export interface IPost {
  write(title: string, message: string): Promise<{ title: string; message: string }>;
  update(id: number, title: string): Promise<boolean>;
  remove(id: number): Promise<boolean>;
}
