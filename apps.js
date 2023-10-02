function divideArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("Arrays must have the same length");
    }

    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] === 0) {
            throw new Error("Division by zero is not allowed");
        }
        result.push(arr1[i] / arr2[i]);
    }

    return result;
}

// const Array1 = [15, 30, 45, 60];
// const Array2 = [5, 6, 3, 10];

// try {
//     const result = divideArrays(Array1, Array2);
//     console.log(result); // Output: [3, 5, 15, 6]
// } catch (error) {
//     console.error("Error: " + error.message);
// }
