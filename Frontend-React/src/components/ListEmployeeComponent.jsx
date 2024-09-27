import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                tasks: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(tasks => tasks.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ tasks: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">To-do List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Assign Task</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Email Id</th>
                                    <th>Task</th>
                                    <th>Priority</th>
                                    <th>Deadline</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(
                                        tasks => 
                                        <tr key = {tasks.id}>
                                             <td> {tasks.name} </td>   
                                             <td> {tasks.email}</td>
                                             <td> {tasks.task}</td>
                                             <td> {tasks.priority}</td>
                                             <td> {tasks.deadline}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(tasks.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(tasks.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListEmployeeComponent
