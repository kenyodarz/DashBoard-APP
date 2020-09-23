export class Post {
  constructor(
    public id: string = null,
    public title: string = null,
    public date: string = null,
    public content: string = null,
    public img: string = null,
    public categories: string[] = null,
    // public categories: Array<string> = null
  ) {}
}
