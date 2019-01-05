export class Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;

  constructor(id:number ,userId:number ,title: string ,completed: boolean) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.completed = completed;
  }
}
