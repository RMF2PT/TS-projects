"use strict";
/*
 * Functions
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentID: 1,
    title: "Assignment 1",
    grade: 0,
};
const assignGrade = updateAssignment(assign1, {
    grade: 90,
});
console.log(assignGrade);
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
console.log(recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true })));
// Record
const hexColorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};
const finalGrades = {
    Sara: "A",
    Tina: "B",
    John: "C",
};
const gradeData = {
    Sara: { assign1: 100, assign2: 100 },
    Tina: { assign1: 90, assign2: 80 },
    John: { assign1: 70, assign2: 60 },
};
const score = {
    studentID: 1,
    grade: 90,
    // verified: true, // ! Throws an error because verified is not picked from the Assignment type
};
const preview = {
    studentID: 1,
    title: "Assignment 1",
    // verified: true, // ! Throws an error because verified is omitted from the Assignment type
};
// ReturnType
//type NewAssign = { title: string; points: number };
const createNewAssign = (title, points, grade) => {
    return {
        title,
        points,
        grade,
    };
};
const tsAssign = createNewAssign("TS Assignment", 100, "A");
console.log(tsAssign);
const assignArgs = ["Generics", 90, "B"];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((data) => {
    console.log(data);
});
