# ✨ content-ts ✨
---
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

## 👋 Introduction 
A small project centering around [TS](https://www.typescriptlang.org/) with [REACT](https://reactjs.org/), [EXPRESS](https://expressjs.com/) and [REDUX](https://redux.js.org/).

## 🫖 Explanations
- ✅ [**quickfetch**](https://github.com/jsoomie/content-ts/tree/main/quickfetch)
  - Goal is to be able to fetch JSON data and display to the user in a neat format. Format displayed data.
- ✅ [**features**](https://github.com/jsoomie/content-ts/tree/main/features)
  - Create Date type to show methods and created own class to implement my own types for it and methods to pull from. Difference between type annotations and type inferences. Explains in detail each types and how and when to implement.
- ✅ [**maps**](https://github.com/jsoomie/content-ts/tree/main/maps)
  - **PROJECT #1** - Displays user and company on a map pulling random data from fakerjs. Adds the ability to add markers depending on the latitude and longitude of said items. Displays marker details from a window that pops up on marker once clicked.
- ✅ [**sort**](https://github.com/jsoomie/content-ts/tree/main/sort)
  - **PROJECT #2** - To create a bubble sort method that can take in numbers, strings, and linkedlists. Despite Array.sort(), this is to showcase the use of interfaces and classes combination. Implement abstract classes.
- ✅ [**stats**](https://github.com/jsoomie/content-ts/tree/main/stats)
  - **PROJECT #3** - To load CSV data, parse, analyze, and report. Introduce generics. Composition vs Inheritance. Displays given in HTML. Static methods.
- 🚧 [**web**](https://github.com/jsoomie/content-ts/tree/main/web)
  - **PROJECT #4** - Create a web framework! Creating a barebones framworks that gets user info from storage and have the ability to change user info and save it into storage.

## 🚜 Technologies and packages (🚜 updating...)
1. [React.js](https://reactjs.org/)
2. [Express.js](https://expressjs.com/)
3. [Redux.js](https://redux.js.org/)
4. [Yarn](https://yarnpkg.com/)
5. [Axios](https://axios-http.com/docs/intro)
6. [JSON Placeholder](https://jsonplaceholder.typicode.com/)
7. [ts-node](https://typestrong.org/ts-node/)
8. [Faker.js](https://www.npmjs.com/package/faker)
9. [Google Maps](https://developers.google.com/maps/documentation)
10. [Parcel](https://www.npmjs.com/package/parcel)
11. [JSON-Server](https://www.npmjs.com/package/json-server)


## 📷 Screenshots (🚜 updating...)
✨[**maps**](https://github.com/jsoomie/content-ts/tree/main/maps)✨


![maps](./assets/maps-screen.png)

---
---

✨[**sort**](https://github.com/jsoomie/content-ts/tree/main/sort)✨

![sort](./assets/sort-screen.png)

---
---

✨[**stats**](https://github.com/jsoomie/content-ts/tree/main/stats)✨

![stats](./assets/stats-screen.png)


---
---
## 📝 Daily Logs (🚜 updating...)
**9/27** - initial commit!  Add base axios request and now create interface of incoming data and set types. Create loggin function and set types to params. Create features folder to hold explanations of types. Types are references to the methods and functions that is avaiable to use for that certain data. Created class of color and attached own methods of display hex color, its name and so on. Type annotations: Code we add to tell TS what type of value a variable will refer to. Type inference: TS tries to figure out what type of value a variable refers to.

**9/28** - Add array types. Add Class Types. Add Object literal. Add function type. TS cannot infer types in JSON.parse() returns as any instead. Add functions explanations. Add object explanations and destructuring advice. Add arrays.ts and tuples.ts. Add interfaces in regards to functions and classes. Add classes. Starting first project that utilizes everything learned so far.

**9/29** - Create maps project. Add models of user and company and exported. Add google maps. Add interface for limited custommap. Add User and Company markers. Update interface to take in markercontent to display within the markers infowindow. Add interface to User class and Company class. 

Create sort project! Create tsconfig.json. Create a bubble sort algorithm thats going to work with numbers, strings and such. Add typeguards. Add seperate class of numbers collection and make interface to take in the sort class. Should be able to take in numbers, characters, and linked lists as long as the 3 properties of length, a swap method, and a swap method is defined from the interface.

**9/30** - Add Abstract classes. Implement abstract classes and go over difference between that and interfaces. Add project 3. Include csv file. Add generic to class. Create reuseable code. Add both inheritance and composition styles. Learn static methods in class.

**10/1** - Add structure to webframe app. Add json-server and add scripts in package.json to run them easier.

---

## ✏️ Learner
[Jonathan Soukaseume](https://github.com/jsoomie)

---

## 🙏 Thanks!
Special thanks to [Stephen Grider](https://udemy.com/user/sgslo) for guiding me and thousands of others through it all! 

## LICENSE
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)




