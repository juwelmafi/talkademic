export const myBookingsPromise = (email, accessToken)=>{
  return fetch(`https://talkademic-server.vercel.app/booked-tutors?email=${email}` , {
    headers:{
      authorization: `Bearer ${accessToken}`
    }
  })
  .then(res=> res.json())
}