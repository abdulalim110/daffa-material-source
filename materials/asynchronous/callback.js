// Function that accepts a callback as a parameter
const checkDoctorAvailability = (queueNumber, callback) => {
  if (queueNumber > 50) {
    callback(false);
  } else if (queueNumber < 10) {
    callback(true);
  }
}

checkDoctorAvailability(51, (isAvailable) => {
  if (isAvailable) {
    console.log("It's almost my turn!");
  } else {
    console.log("I'll go for a walk first.");
  }
})

console.log("======================")


function checkDoctorQueue(queueNum, callback) {
  console.log(`Current queue is: ${queueNum}`);
  setTimeout(function() {
    if (queueNum === 10) {
      console.log("I am entering the doctor's room");
      callback(0);
    } else {
      console.log("I am still waiting...");
      callback(queueNum + 1);
    }
  }, 1000);
}


// checkDoctorQueue(8, (newNumber)=>{
//   checkDoctorQueue(newNumber, (lastNumber)=>{
//       checkDoctorQueue(lastNumber, ()=>{
//       })
//   })
// })


function execute(queueNumber) {
  checkDoctorQueue(queueNumber, function(nextQueue) {
    if (nextQueue !== 0) {
      execute(nextQueue);
    }
  });
}
execute(1);
