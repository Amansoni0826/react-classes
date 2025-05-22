import React, { useState } from "react";
const EmployeeForm = () => {

    const [employeeData, setEmployeeData] = useState({ name: "", city: "", mobile: "" });
    const [tableData, setTableData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload

        // Add current form data to the table
        setTableData((prevData) => [...prevData, employeeData]);

        // Clear form fields
        setEmployeeData({ name: "", city: "", mobile: "" });
    };

    return <>
        <form className="employee-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <div>
                <input type="text" name="name" value={employeeData.name} onChange={handleChange} />
            </div>
            <label>City</label>
            <div>
                <input type="text" name="city" value={employeeData.city} onChange={handleChange} />
            </div>
            <label>Mobile No.</label>
            <div>
                <input type="text" name="mobile" value={employeeData.mobile} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        <div id="output">
            <table className="Table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.city}</td>
                            <td>{row.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}
export default EmployeeForm;