import React from "react";
import styles from "../styles/ManageEmployees.module.css";
import { employees } from "../aaa_samples/employees";

function ManageEmployees() {
  return (
    <div className={styles.manage_employees_container}>
      <h1>Manage Employees</h1>
      <div className={styles.employees_list}>
        {employees.map((employee) => {
          return (
            <div key={employee.id} className={styles.employee_card}>
              <div className={styles.employee_detail}><strong>ID:</strong> {employee.id}</div>
              <div className={styles.employee_detail}><strong>Name:</strong> {employee.fname} {employee.lname}</div>
              <div className={styles.employee_detail}><strong>Email:</strong> {employee.email}</div>
              <div className={styles.employee_detail}><strong>Employee Since:</strong> {new Date(employee.timestamp).toLocaleDateString()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManageEmployees;
