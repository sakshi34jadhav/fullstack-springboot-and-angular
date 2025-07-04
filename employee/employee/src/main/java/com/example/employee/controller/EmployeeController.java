package com.example.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.model.Employee;
import com.example.employee.repository.EmployeeRepository;



@RestController
@CrossOrigin(origins="http://localhost:4200")

public class EmployeeController {
	@Autowired
    private EmployeeRepository employeerepository;

    @GetMapping("/employee")
    List<Employee> getAllEmployee() {
        return employeerepository.findAll();
    }

    @PostMapping("/PostEmployee")
    String enrollemployee(@RequestBody Employee emp) {
        employeerepository.save(emp);
        return "Employee added successfully";
    }

    @DeleteMapping("/deleteemployee/{id}")
    void deleteById(@PathVariable long id) {
        employeerepository.deleteById(id);
    }

    @PutMapping("/edited/{id}")
    void updateEmployee(@RequestBody Employee emp, @PathVariable long id) {
        Employee e = employeerepository.findById(id).get();
        e.setName(emp.getName());
        e.setExperience(emp.getExperience());
        employeerepository.save(e);
    }
    @GetMapping("/getOneemployee/{id}")
    Employee getOneEmployeeById(@PathVariable long id) {
        return employeerepository.findById(id).get();
    }
}
