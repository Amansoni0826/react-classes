import React,{useState} from "react"

const Login = () => {

    const [name,setName] = useState('');
    const [school,setSchool] = useState('');

    const handleName = (e) => {

        console.log(e.target.value);

        setName(e.target.value);

    }
    
    return <> 
      <form style={{textAlign:"left"}}>
         <br/>
           <label>Name</label>
            <div>
              <input type="text" name="name"  onChange={handleName}/>
            </div> 
            <div>
                <button type="submit">Submit</button>
            </div>

            <label>School</label>
            <div>
              <input type="text" name="school"  onChange={(e) =>  { setSchool(e.target.value)}  }/>
            </div> 
            <div>
                <button type="submit">Submit</button>
            </div> 
         <br/>  
      </form>
      <h1>Your Name is {name}</h1>
    </>
}

export default Login;