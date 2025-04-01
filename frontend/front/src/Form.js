function Form(){
    return(
        <form>
            <h1>Form</h1>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Marca'/>

            <input type='button' value='Add'/>
            <input type='button' value='Delete'/>
            <input type='button' value='Update'/>
            <input type='button' value='Cancel'/>
        </form>
    )
}

export default Form;