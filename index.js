// Create a function that computes for the roots of a quadratic equation using arrow function. The inputs would be 3 values (a, b, c) corresponding to ax^2 + bx + c.

const rootsOfQuadFunc = (a,b,c) => {
    let root1 = null;
    let root2 = null;

    root1 = (-b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
    console.log();
    root2 = (-b - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);

    return [root1, root2];
}

console.log(rootsOfQuadFunc(2,9,-5));
console.log(rootsOfQuadFunc(2,4,2));