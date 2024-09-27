package com.todo.bean;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "employees27sept2024")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "email_id")
	private String email;
	@Column(name = "name")
	private String name;
	@Column(name = "Task")
	private String Task;
	@Column(name = "Priority")
	private String Priority;
	@Column(name = "Deadline")
	private Date deadline;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getemail() {
		return email;
	}
	public void setemail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTask() {
		return Task;
	}
	public void setTask(String task) {
		Task = task;
	}
	public String getPriority() {
		return Priority;
	}
	public void setPriority(String priority) {
		Priority = priority;
	}
	public Date getDeadline() {
		return deadline;
	}
	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}
	public Employee(long id, String email, String name, String task, String priority, Date deadline) {
		super();
		this.id = id;
		this.email = email;
		this.name = name;
		Task = task;
		Priority = priority;
		this.deadline = deadline;
	}
	public Employee() {
		super();
	}
	public Employee(String email, String name, String task, String priority, Date deadline) {
		super();
		this.email = email;
		this.name = name;
		Task = task;
		Priority = priority;
		this.deadline = deadline;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", email=" + email + ", name=" + name + ", Task=" + Task + ", Priority="
				+ Priority + ", deadline=" + deadline + "]";
	}
	
}