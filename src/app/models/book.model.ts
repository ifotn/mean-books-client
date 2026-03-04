// define Book class that will be used by view
export class Book {
  _id?: string | undefined;  // make _id nullable with ? as new book won't have this yet
  title: string | undefined;
  year: number | undefined;
}