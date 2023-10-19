const { get } = require("express/lib/response");


console.log('person1:shows ticket')
console.log('person2:shows ticket')

const preMovie = async ()=>{
    const promiseWifewBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    let ticket = await promiseWifewBringingTicks;
    const getPopcorn = new Promise((resolve,reject)=>{
            resolve(`poporn`)
        })
    const getCandy = new Promise((resolve,reject)=>resolve(`candy`))
    const getCoke = new Promise((resolve,reject)=>resolve(`coke`))

    let [popcorn,coke,candy]= await Promise.all([getPopcorn,getCandy,getCoke])

    console.log(`${popcorn} ${coke} ${candy}`)

    return ticket;

};
preMovie().then((m)=>console.log(`person3: shows ${m}`));







console.log('person4:shows ticket')
console.log('person5:shows ticket')