import React from 'react';

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
        // console.log("componentDidMount")
    }

    componentDidUpdate(prevProps , prevState ){

        if( this.state.count != prevState.count || this.state.count != prevState.count ){
                
        }
    }

    
    render() {
        return (
            <>

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