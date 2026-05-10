// Problem-------> 1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}





// Problem------->  2
function reverseString(value: string): string {
  return value.split("").reverse().join("");
}






// Problem-------> 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}








// Problem-------> 4
function getProperty<T, X extends keyof T>(obj: T, key: X): T[X] {
  return obj[key];
}

// Sample Input
const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

console.log(getProperty(user, "name"));






// Problem-------> 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}







// Problem-------> 6
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}






// Problem-------> 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((number) => arr2.includes(number));
}
