// import React from 'react';
// import { Link } from 'react-router-dom';

// import * as ROUTES from '../../constants/routes';

// const SignUpPage = () => (
//     <div>
//         <h1>Signup</h1>
//         <SignUpForm />
//     </div>
// );

// const INITIAL_STATE = {
//     username: '',
//     email: '',
//     passwordOne: '',
//     passwordTwo: '',
//     error: null,
// };


// class SignUpForm extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {...INITIAL_STATE};
//     }

//     onSubmit = event => {

//     }

//     onChange = event => {
        
//     };

//     render(){
//         return(
//             <form onSubmit={this.onSubmit}>
            
//             </form>
//         );
//     }
// }

// const SignUpLink = () => (
//     <p>
//         Don't have an account? <Link to = {ROUTES.SIGN_UP}>Sign Up</Link>
//     </p>
// );

// export default SignUpPage;

// export { SignUpForm, SignUpLink };






import React from 'react';

import { FirebaseContext } from '../Firebase';
import SignUpForm from './SignUpForm';

const Signup = () => (
    <div>
        <div className="row">
            <div className="col-auto mx-auto">
                <h1>Signup Form</h1>
            </div>
        </div>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default Signup;