import React from "react";
import './registration.scss';
class ParentCompoennt extends React.Component<any> {
    constructor(props:any){
        super(props)
    }
    checkboxChange = ()=>{
        console.log('checkbox triggered')
    }
    render(){
        return(
            <div data-testid= "registration-form">
                <div>Registration Form</div>
                

                <div className="reg-flex-container">
            <div className="reg-container">
                <h2 className="header">Registration</h2>
                <div className="form-containter">
                    <label >Name</label>
                    <input className="input-box" placeholder="Your name.." data-testid="name-test" />
                    <label >Mobile</label>
                    <input className="input-box" placeholder="Your Mobile number 10 digit.." />
                    <label >City</label>
                    <input className="input-box" placeholder="Your City.." />
                    <label >T-shirt Size</label>
                    <select className="input-box" id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <label >I Agree that term and conditions</label>
                    <input type="checkbox" data-testid="agree" onChange={()=>this.checkboxChange()} />

                    <input className="submit-btn" type="submit" value="Submit" />



                </div>



            </div>
        </div>

            </div>
        )
    }
}

export default ParentCompoennt;

