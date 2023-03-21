import React from 'react';
import UserContext from '../utils/UserContext';

class Profile extends React.Component {

    constructor(props){

        super(props);

       //Create State
        this.state={
            userInfo:{
                name: "Dummy data",
                location : "Dummy Location "
            }
        }

    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/IamSiddhant14");

        const json = await data.json();

        this.setState({
            userInfo: json 
        })
        

       this.v = setInterval(() => { // Here this keyword is accessiible through out the element 
            console.log("componentDidMount")
        }, 1000 )
    }

    componentDidUpdate(prevProps , prevState ){ 

        if( this.state.count != prevState.count || this.state.count != prevState.count ){
                
        }
    }

    componentWillUnmount(){

        clearInterval(this.v);

    }

    
    render() {
        return (
            <>

{/* How to use usecontext in a class component  */}
                <UserContext.Consumer>  //
                     {({user}) => <h4>{user.name}</h4>}
                </UserContext.Consumer>

                <h1>This is the profile page made using Profile Class Component </h1>

                {/* <h2> name : {this.props.name} </h2>
                <h2> name2 : {this.state.name2} </h2>
                <h2> name2 : {this.state.name3} </h2> */}
                {/* <button 
                    onClick={() => {
                    this.setState({
                        name:3,
                        name2: 4
                    })

                }}>this.setState({})</button>   */}

                <img src={this.state.userInfo.avatar_url} />
                <h2>Name : {this.state.userInfo.name }</h2>
                <h2>Location : {this.state.userInfo.location }</h2>



            </>
        ) 

    }
}

export default Profile;