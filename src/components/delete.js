import React, { useState, useEffect } from 'react';


class Profile extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            name: 'Siddhant',
            val: 4
        }
    }


    componentDidMount() {

        this.setState({
            name: "Sharma"
        })

        this.v = setInterval(() => {
            console.log("valllalal")
        }, 1000)

    }

    componentDidUpdate ( prevProps , prevState ) {

        if( prevState.name != this.state.name ){
              console.log("js");
        }

        console.log("hi am there componentDidUpdate")

    }

    componentWillUnmount() {

        clearInterval(this.v);
        
    }



    render() {
        return (
            <>

                <h1>Hello  world {this.state.name}</h1>
                <h1>{this.props.name }</h1>

            </>
        )
    }
}

export default Profile;