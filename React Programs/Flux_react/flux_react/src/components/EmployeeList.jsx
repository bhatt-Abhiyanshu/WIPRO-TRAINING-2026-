import { useEffect, useState } from "react";
import employeeStore from "../stores/EmployeeStore";
import { addEmployee } from "../actions/EmployeeActions";
function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    setEmployees(employeeStore.getAllEmployees());
    const updateUI = () => {
      setEmployees([...employeeStore.getAllEmployees()]);
    };
    employeeStore.addChangeListener(updateUI);
    return () => {
      employeeStore.removeChangeListener(updateUI);
    };
  }, []);
  return (
    <div>
      <h3>Employee List</h3>
      <button onClick={() => addEmployee("abhy")}>
        Add Employee
      </button>
      {employees.map((emp, index) => (
        <p key={index}>{emp}</p>
      ))}
    </div>
  );
}
export default EmployeeList;