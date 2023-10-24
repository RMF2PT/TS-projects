// * Original JS code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// * My TS code
// const year = document.getElementById("year")!;
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear.toString());
// year.textContent = thisYear.toString();

// * 1st variation of TS code
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }

// * 2nd variation of TS code
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

// // TS code with type assertion
// const year = <HTMLInputElement>document.getElementById("year")!;
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear.toString());
// year.textContent = thisYear2.toString();

// // TS code with type assertion
// const year = document.getElementById("year") as HTMLInputElement;
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear.toString());
// year.textContent = thisYear.toString();

// // TS code with type assertion
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year!.setAttribute("datetime", thisYear.toString());
// year!.textContent = thisYear.toString();

// // TS code with type assertion
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// (<HTMLInputElement>year).setAttribute("datetime", thisYear.toString());
// (<HTMLInputElement>year).textContent = thisYear.toString();

// // TS code with type assertion
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// (year as HTMLInputElement).setAttribute("datetime", thisYear.toString());
// (year as HTMLInputElement).textContent = thisYear.toString();
