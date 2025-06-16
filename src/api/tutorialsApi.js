export const myTutorialsPromise = (email, accessToken)=>{
  return fetch(`https://talkademic-server.vercel.app/tutorialsByEmail?email=${email}` , {
    headers:{
      authorization: `Bearer ${accessToken}`
    }
  })
  .then(res=> res.json())
}