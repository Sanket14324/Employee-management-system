package com.restapi.backend.ems.controller;

import com.restapi.backend.ems.model.Employee;
import com.restapi.backend.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("{name}")
    public List<Employee> getEmployeByName(@PathVariable String name){
        return employeeRepository.findAll().stream().filter(employee -> Objects.equals(employee.getName(), name))
                .collect(Collectors.toList());
        
    }

    @PostMapping()
    public List<Employee> addNewEmployee(@RequestBody Employee employee){
        employeeRepository.save(employee);
        return employeeRepository.findAll();
    }


    @DeleteMapping("{Id}")
    public List<Employee> deleteEmployee(@PathVariable Long Id){
        Employee employee = employeeRepository.findById(Id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        employeeRepository.delete(employee);
        return employeeRepository.findAll();


    }

}
