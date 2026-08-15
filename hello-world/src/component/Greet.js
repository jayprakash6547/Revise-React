import react from 'react';

// function Greet(){
//     return <h1>Hello JayPrakash</h1>
// }
const Greet = ({name,designation}) => {
    return (
        <div>
            <h1>Hello {name} a.k.a {designation}</h1>
        </div>
    )
}
    

export default Greet;