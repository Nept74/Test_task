'use strict';

// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let sortedCourses = []


// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


function sortCourses(range) {
    let min = Math.min(...range);
    let max = Math.max(...range);

    function diapasonCheck(...array) {
        if (array[0] >= min && array[0] <= max &&
            array[1] >= min && array[1] <= max){
            return true
        }
    }

    for (let cours of courses){
        if (diapasonCheck(...cours.prices)){
            sortedCourses.push(cours)
        }
    }
    console.log(sortedCourses)
}
sortCourses(requiredRange1)
