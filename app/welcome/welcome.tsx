import MyButton from "../components/MyButton";
import Profile from "../components/Person";
import type Person from "../types/Person";

export function Welcome() {
  return(
    <div>
      <h1> Welcome to my app</h1>
      <Profile person={person}/><br></br>
      <MyButton/>
    </div>
  );
  }

  const person : Person = {
    name: 'Latifah',
    imageUrl:'https://www.reviewstl.com/wp-content/uploads/2010/01/avatar.jpg',
    imageSize:90,
  };