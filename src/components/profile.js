import React, { Component } from 'react'
import './profile.css'


class profile extends Component {
    render() {
        return (
            <div>
              
                <div className="topnav" id="myTopnav">
                <a href="#news">Brain Master</a>
                    
                    <a href="#news"style={{float: "right"}}>Profile</a>
                    <a href="#news"style={{float: "right"}}>Registration</a>
                    <a href="#news"style={{float: "right"}}>Login</a>
                    <a href="#news"style={{float: "right"}}>ChatBox</a>
                    <a href="#news"style={{float: "right"}}>AboutUs</a>
                    <a href="#news"style={{float: "right"}}>Home</a>
                    
                    
                    
                    
                    
                    
                </div>
                <div className="card">
                    <h2 className="Title"><br />Profile</h2>
                    <h2 className="Title"><br />Nirosha Kumuduni</h2>
                    <div><img src="kumu.png" style={{width:"15%",height:"15%",borderRadius:"80%", marginTop:"20px"}} alt="John" ></img><br/></div>
                    <br/><div className="cardmiddle">
                        <div className="container">
                        <button>+ Add your story</button>
                            <p>
                                <div className="row">
                                    <div className="column">
                                        <ul><li>Studies at University of Moratuwa-Faculty of Information Technology</li>
                                            <li>Went to R/Kalawana National School</li>
                                            <li>Lives in Kalawana </li>
                                        </ul>
                                        <label>First Name : </label><input type="text" /><br/>
                                        <label>Last Name : </label><input type="text" /><br/>
                                        <label>Address : </label><input type="text" /><br/>
                                        <label>Email : </label><input type="text" /><br/>
                                        <label>Mobile Number : </label><input type="text" />
                                    </div>
                                    <div className="column">
                                    
                                        
                                        
                                    </div>
                                </div><br/><br/>
                            </p>
                            <div>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                    <div style={{margin: "24px 0"}}>
                <a href="#"><i class="fa fa-dribbble"></i></a> {" "}
                <a href="#"><i class="fa fa-twitter"></i></a> {" "}
                <a href="#"><i class="fa fa-linkedin"></i></a> {" "}
                <a href="#"><i class="fa fa-facebook"></i></a> 
               
                </div> <br/>
                </div>
                <br/>
            </div>
        );
    }
}

export default profile;

