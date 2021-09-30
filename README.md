# ✨ content-ts ✨
---
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

## 👋 Introduction 
A small project centering around [TS](https://www.typescriptlang.org/) with [REACT](https://reactjs.org/), [EXPRESS](https://expressjs.com/) and [REDUX](https://redux.js.org/).

## 🫖 Explanations
- ✅ [quickfetch](https://github.com/jsoomie/content-ts/tree/main/quickfetch)
  - Goal is to be able to fetch JSON data and display to the user in a neat format. Format displayed data.
- ✅ [features](https://github.com/jsoomie/content-ts/tree/main/features)
  - Create Date type to show methods and created own class to implement my own types for it and methods to pull from. Difference between type annotations and type inferences. Explains in detail each types and how and when to implement.
- ✅ [maps](https://github.com/jsoomie/content-ts/tree/main/maps)
  - First project! Displays user and company on a map pulling random data from fakerjs. Adds the ability to add markers depending on the latitude and longitude of said items. Displays marker details from a window that pops up on marker once clicked.
- 🚧 [sort](https://github.com/jsoomie/content-ts/tree/main/sort)
  - Second project! To create a bubble sort method that can take in numbers, strings, and linkedlists. Despite Array.sort(), this is to showcase the use of interfaces and classes combination.

## 🚜 Technologies and packages (🚜 updating...)
1. [React.js](https://reactjs.org/)
2. [Express.js](https://expressjs.com/)
3. [Redux.js](https://redux.js.org/)
4. [Yarn](https://yarnpkg.com/)
5. [Axios](https://axios-http.com/docs/intro)
6. [JSON Placeholder](https://jsonplaceholder.typicode.com/)
7. [ts-node](https://typestrong.org/ts-node/)
8. [faker.js](https://www.npmjs.com/package/faker)
9. [Google Maps](https://developers.google.com/maps/documentation)


## 📷 Screenshots (🚜 updating...)
[maps](https://github.com/jsoomie/content-ts/tree/main/maps)


![maps](./assets/maps-screen.png)

---

---
## 📝 Daily Logs (🚜 updating...)
9/27 - initial commit!  Add base axios request and now create interface of incoming data and set types. Create loggin function and set types to params. Create features folder to hold explanations of types. Types are references to the methods and functions that is avaiable to use for that certain data. Created class of color and attached own methods of display hex color, its name and so on. Type annotations: Code we add to tell TS what type of value a variable will refer to. Type inference: TS tries to figure out what type of value a variable refers to.

9/28 - Add array types. Add Class Types. Add Object literal. Add function type. TS cannot infer types in JSON.parse() returns as any instead. Add functions explanations. Add object explanations and destructuring advice. Add arrays.ts and tuples.ts. Add interfaces in regards to functions and classes. Add classes. Starting first project that utilizes everything learned so far.

9/29 - Create maps project. Add models of user and company and exported. Add google maps. Add interface for limited custommap. Add User and Company markers. Update interface to take in markercontent to display within the markers infowindow. Add interface to User class and Company class. 

Create sort project! Create tsconfig.json. Create a bubble sort algorithm thats going to work with numbers, strings and such. Add typeguards. Add seperate class of numbers collection and make interface to take in the sort class. Should be able to take in numbers, characters, and linked lists as long as the 3 properties of length, a swap method, and a swap method is defined from the interface.

---

## ✏️ Learner
[Jonathan Soukaseume](https://github.com/jsoomie)

---

## 🙏 Thanks!
Special thanks to [Stephen Grider](https://udemy.com/user/sgslo) for guiding me and thousands of others through it all! 



