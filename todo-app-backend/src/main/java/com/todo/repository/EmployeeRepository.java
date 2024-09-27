package com.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo.bean.Employee;



@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
