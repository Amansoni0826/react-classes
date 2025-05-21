import React, { useState } from "react";
const EmployeeForm = () => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [mobile, setMobile] = useState('');

    const [employeeData, setEmployeeData] = useState([{ 'name': 'test', 'city': 'test', 'mobile': 'test' }]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmployeeData(...employeeData, { 'name': name, 'city': city, 'mobile': mobile });

        console.log(employeeData);

    }

    return <>
        <form className="employee-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <div>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <label>City</label>
            <div>
                <input type="text" name="city" onChange={(e) => setCity(e.target.value)} />
            </div>
            <label>Mobile No.</label>
            <div>
                <input type="text" name="Number" onChange={(e) => setMobile(e.target.value)} />
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
                    {

                        employeeData.map(function (item, index) {

                            return <tr key={index * Math.random() * 10000}>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.mobile}</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    </>
}
export default EmployeeForm;