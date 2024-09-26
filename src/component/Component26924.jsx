import React from 'react'

// //variable
// const name ="monika"

// //function describe
// function text () {
//         return "my name is monika"
//      }

//main function with props

export default function Component26924(props) {
 
  // const {name,email,device,stuinfo}=props
 
    return (
    // <div>
    //  {name}
    //  {text()}
    // </div>
    
 //props pass:

   <div>
    {
    /* {props.name}
    {props.email} */ }

    {/* {name }
    {email}
    {device} */}


    {props.stuinfo.Name}
    {props.stuinfo.Email}
    {props.stuinfo.Device.map((device) =>(
      <p key={device}> {device}</p>
    ))}
    {props.stuinfo.emoji}
   
   </div>
  



)
}
