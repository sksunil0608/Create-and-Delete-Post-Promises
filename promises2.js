console.log('person1:shows ticket')
console.log('person2:shows ticket')
const promiseWifewBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})

const getPopcorn = promiseWifewBringingTicks.then((t)=>{
    console.log("wifi: I have tickets")
    console.log("husband: We should go in")
    console.log('wife: No i am hungry')
    return new Promise((resolve,reject)=>{
        resolve(`person3:${t} poporn`)
    })
    
})

const getButter = getPopcorn.then((t)=>{
    console.log("Husband: I got some popcorn")
    console.log("husband: We should go in")
    console.log('wife: No i need butter')
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
    })
})
getButter.then((t)=>{
    console.log(t)
})
console.log('person4:shows ticket')
console.log('person5:shows ticket')