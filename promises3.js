

console.log('person1:shows ticket')
console.log('person2:shows ticket')

const preMovie = async ()=>{
    const promiseWifewBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    const getPopcorn = new Promise((resolve,reject)=>{
            resolve(`poporn`)
        })
    const getButter = new Promise((resolve,reject)=>{
        resolve(`butter`)
    })
    const getCandy = new Promise((resolve,reject)=>resolve(`candy`))

    const getCoke = new Promise((resolve,reject)=>resolve(`coke`))

    const getColdrink = new Promise((resolve,reject)=>resolve(`colddrink`))
   

    let ticket = await promiseWifewBringingTicks;
    console.log(`wifi: I have ${ticket}`)
    console.log("husband: We should go in")
    console.log('wife: No i am hungry')
    
    let popcorn = await getPopcorn;
    console.log(`Husband: I got some ${popcorn}`)
    console.log("husband: We should go in")
    console.log('wife: No i need butter')

    let butter = await getButter;
    console.log(`Husband: I got some ${butter}`)
    console.log("husband: We should go in")
    console.log('Wife : No, I need candy')

    let candy = await getCandy;
    console.log(`Husband: I got some ${candy}`)
    console.log("husband: We should go in")
    console.log('Wife : No, I need Coke')

    let coke = await getCoke;
    console.log(`Husband: I got some ${coke}`)
    console.log("husband: We should go in")
    console.log('Wife : No, I need Colddrink')


    let colddrink = await getColdrink;
    console.log(`Husband: I got some ${colddrink}`)
    console.log("husband: We should go in")
    console.log('Wife : Lets go we are getting late')
    console.log('hubby : Thanks for remainder *grins*')

    return ticket;

};
preMovie().then((m)=>console.log(`person3: shows ${m}`));







console.log('person4:shows ticket')
console.log('person5:shows ticket')