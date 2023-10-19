

const testUserForm = async ()=>{
    const loadUserForm = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Page Loaded')
        },3000)
    })

    const userName = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("User Name Entered")
        })
    })
    const VerifyUser = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Verified")
        })
    })
    

    await loadUserForm;
    await userName;
    const testResult = VerifyUser;
    return testResult

};
testUserForm().then((m)=>console.log(`person3: shows ${m}`));
