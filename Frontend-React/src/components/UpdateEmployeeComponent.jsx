import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name:'',
            email: '',
            task:'',
            priority:'',
            deadline:'',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeTaskHandler = this.changeTaskHandler.bind(this);
        this.changePriorityHandler = this.changePriorityHandler.bind(this);
        this.changeDeadlineHandler = this.changeDeadlineHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({
                    name: employee.name,
                    email : employee.email,
                    task:employee.task,
                    priority:employee.priority,
                    deadline:employee.deadline
                });
            });
        }        
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, email: this.state.email,  task:this.state.task, priority:this.state.priority,deadline:this.state.deadline};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeTaskHandler= (event) => {
        this.setState({task: event.target.value});
    }
    changePriorityHandler= (event) => {
        this.setState({priority: event.target.value});
    }
    changeDeadlineHandler= (event) => {
        this.setState({deadline: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        const getCurrentDate = () => {
            const today = new Date();
            return today.toISOString().split('T')[0];
        };
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Task</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Name: </label>
                                            <input  name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}  />
                                        </div>
                    
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input type= "email" placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler} readOnly/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Task: </label>
                                            <input placeholder="Task" name="task" className="form-control" 
                                                value={this.state.task} onChange={this.changeTaskHandler}/>
                                        </div>
                                        <p></p>
                                        <div className = "form-group">
                                            <label> Priority: </label>
                                            <select name="priority" id='priority' required 
                                            value={this.state.priority} onChange={this.changePriorityHandler}>
                                            <option value="">Select Priority</option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                        </div>
                                        <p/>
                                        <div className = "form-group">
                                            <label> Deadline: </label>                
                                             <input type="date" value={this.state.deadline} onChange={this.changeDeadlineHandler}required min={getCurrentDate()}/>
                                        </div>
                                        <p/> <p/>
                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}
export default UpdateEmployeeComponent
