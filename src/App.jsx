import FirstComponent from "./component/FirstComponent";
import SecondComponent from "./component/SecondComponent";
import ThirdComp from "./component/ThirdComp";
import GenderRadio from "./component/GenderRadio";
import ProfileImage from './component/ProfileImage';
import IntroPage from "./component/IntroPage";
import Notification from "./component/Notification";
import Navigation from './component/Navigation';
import ImageMasonry from './component/ImageMasonry'
import Component26924 from "./component/Component26924";
import ProductList from "./component/ProductList";


// function text(){
//   return "I am monika "
// }
// const name="monika " 
function App() {
  //const devices=["mobile ","laptop","headphone"]
 
  //dictionary declaration
  // const studentinfo={
  //  Name: "monika😎",
  //  Email: "abc@gmail.com😒",
  //  Device: ["mobile🤦‍♂️", "laptop🤷‍♂️", "tab🤷‍♀️"],
  //  emoji:'😁'
  // }
 

  const productlist=[{
    Name: "icecream",
    code: "01",
    element: ["chocolate", "vanilla", "milk"],
   },
   {
    Name: "Biriayni",
    code: "02",
    element: ["rice","biriyani moshla", "Mangso"],

   },
   {
    Name: "mango juice",
    code: "02",
    element: ["mango","milk","sugar" ],

   },
]
  return(
    
    <>
      
        <ProductList allproduct={productlist}/>
     
    </>     
     
  );
  
}

export default App;
