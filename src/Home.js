import React from "react";

class Home extends React.Component{
render(){
    console.log("code inside child component")
    //console.log(this.props.val);
    return (
        <>
        <h2>
            Hellow from Home Component.
        </h2>
        <Home/>
        </>
    )
}

}
export default Home;