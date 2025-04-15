function Form(){
    return(
        <form>
            <h1>Form</h1>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Marca'/>

            <input className="btn btn-success" type='button' value='Add'/>
            <input className="btn btn-danger" type='button' value='Delete'/>
            <input className="btn btn-primary" type='button' value='Update'/>
            <input className="btn btn-warning" type='button' value='Cancel'/>
        </form>
    )
}

export default Form;