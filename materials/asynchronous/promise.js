// promises

const willGetNewPhone = (isMomHappy)=>{
  return new Promise(
    (resolve, reject) =>{
      if (isMomHappy){
        let phone = {
          brand: 'Samsung',
          color: 'Black'
        }
        resolve(phone)
      }else{
        let reason = new Error("Mom is not happy")
        reject(reason)
      }
    }
  )
}

const checkPatientData = (patientIdNumber)=>{
  let data = [
    {id: 1, name: "John", gender: "Male"},
    {id: 2, name: "Michael", gender: "Male"},
    {id: 3, name: "Sarah", gender: "Female"},
    {id: 4, name: "Frank", gender: "Male"},
  ]

  return new Promise ((resolve, reject)=>{
    const patient = data.find((item)=> item.id ===patientIdNumber)
    if (patient){
      resolve(patient)
    }else{
      let reason = new Error("Patient Not Found")
      reject(reason)
    }
  })
}

const firstPromise = () =>{
  return new Promise ((resolve,reject) =>{
    setTimeout(()=>{
      resolve("first promise")
    },1000)
  })
}


const secondPromise = () =>{
  return new Promise ((resolve,reject) =>{
    setTimeout(()=>{
      resolve("second promise")
    },1000)
  })
}


const thirdPromise = () =>{
  return new Promise ((resolve,reject) =>{
    setTimeout(()=>{
      resolve("third promise")
    },1000)
  })
}


// execution of promise

willGetNewPhone(false).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err.message)
})


checkPatientData(6).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err.message)
})

const checkAsync = async () =>{
  try{
    const PatientNumber3 = await checkPatientData(3)
    const PatientNumber4 = await checkPatientData(4)
    console.log(PatientNumber3, PatientNumber4)
  }catch(err){
    console.log(err.message)
  }
}

const asyncSerial = async () =>{
  try{
    let a = await firstPromise()
    console.log(a)
    let b = await secondPromise()
    console.log(b)
    let c = await thirdPromise()
    console.log(c)
  }catch(err){
    console.log(err.message)
  }
}

const asyncParalel = () =>{
  firstPromise().then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err.message)
  })

  secondPromise().then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err.message)
  })
  thirdPromise().then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err.message)
  })
}

checkAsync()
asyncSerial()
asyncParalel()
