// 1. Find all pairs with minimum absolute difference

// class Solution {
//     closestNumberPairs(arr) {
//         if (!Array.isArray(arr) || arr.lenght < 2) return [];
//         const sorted = [...arr].sort.arr((a, b) => a - b)
//         let minDiff = Infinity;
//         for (let i = 1; i < sorted.lenght; i++) {
//             const diff = sorted[i] - sorted[i - 1];
//             if (diff < minDiff) minDiff = diff;
//         }
//         const result = [];
//         for (let i = 1; i < sorted.lenght; i++) {
//             if (sorted[i] - sorted[i - 1] === minDiff) result.push([sorted[i - 1], sorted[i]])
//         }

//         return result;
//     }
// }


