// function checkUserAvailability(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const availableUsers = ["admin", "gagan", "hemanth"];
//             if (availableUsers.includes(username.toLowerCase())) {
//                 reject("Username " + username + " already exists !!")
//             } else {
//                 resolve("Username " + username + " available !!")
//             }

//         }, 3000);
//     })
// }

// checkUserAvailability("sky")
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => console.log(err))

////////////////////////////////////////////////////////////////////////////////////////////////

// function checkEligibility(customerId) {
//     return new Promise((resolve, reject) => {
//         console.log(`Checking eligibility for customer #${customerId}...`);
//         setTimeout(() => {
//             let isEligible = Math.random() > 0.2;
//             if (isEligible) {
//                 resolve("Customer is eligible for the loan.");
//             } else {
//                 reject("Customer does not meet the eligibility criteria.");
//             }
//         }, 2000);
//     });
// }

// function approveLoan(eligibilityStatus) {
//     return new Promise((resolve, reject) => {
//         console.log(eligibilityStatus);
//         console.log("Processing loan approval...");
//         setTimeout(() => {
//             let approvalSuccess = Math.random() > 0.2;
//             if (approvalSuccess) {
//                 resolve("Loan approved successfully!");
//             } else {
//                 reject("Loan approval failed due to internal issues.");
//             }
//         }, 3000);
//     });
// }

// function allocateFunds(approvalStatus) {
//     return new Promise((resolve, reject) => {
//         console.log(approvalStatus);
//         console.log("Allocating funds...");
//         setTimeout(() => {
//             let FundAllocSuccess = Math.random() > 0.2;
//             if (FundAllocSuccess) {
//                 resolve("Funds have been allocated to the customer.");
//             } else {
//                 reject("Funds allocation failed due to a technical issue.");
//             }
//         }, 4000);
//     });
// }

// // Chaining Promises
// checkEligibility(101)
//     .then((eligibilityStatus) => approveLoan(eligibilityStatus))
//     .then((approvalStatus) => allocateFunds(approvalStatus))
//     .then((finalStatus) => {
//         console.log(finalStatus);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

// console.log("Automatic loan processing initiated...");

////////////////////////////////////////////////////////////////////////////////////////////////////////
// promises api

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 1 resolved'), 1000); // Resolves after 1 second
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 rejected'), 500); // Rejects after 0.5 seconds
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 1500); // Resolves after 1.5 seconds
});

// Promise.all([promise1, promise2, promise3]) // Wait for all promises to resolve
//     .then((values) => console.log("all resolved ", values)) // Log the resolved values
//     .catch((error) => console.error(error)); // Log any errors



// Promise.race([promise1, promise2, promise3]) // Wait for the first promise to resolve
//     .then((value) => console.log("race resolved ", value)) // Log the resolved value
//     .catch((error) => console.error(error)); // Log any errors



// Promise.any([promise1, promise2, promise3]) // Wait for any promise to resolve
//     .then((value) => console.log("any resolved ", value)) // Log the resolved value
//     .catch((error) => console.error(error)); // Log any errors



// Promise.allSettled([promise1, promise2, promise3])
//     .then(results => console.log("All promises settled:", results)); 



///////////////////////////////////////////////////////////////////////////////////


// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

/////     /////     /////     //////     ///////      ///////     //////    //////   
// With async/await
// async function fetchData() {
//     try {
//         let response = await fetch('https://api.example.com/data');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData();
