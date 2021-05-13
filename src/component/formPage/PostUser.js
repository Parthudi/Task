import React, {useState, useEffect} from 'react'
import './postUser.css'

const PostUser = (props) => {
    const [values, setValues] = useState({
            id: '',
            name: '',
            type: '',
            description: '',
            volume: '',
            mode: '',
            Type: '',
            destination: '',
            origin: "",
            TYPE: "",
            total: "",
            status: "",
            userId: "",
            loading: false,
            error: "",
            formData: '',
            });

    const {   
        id,
        name,
        type,
        description,
        volume,
        mode,
        Type,
        destination,
        origin,
        TYPE,
        total,
        status,
        userId,
            error,
            formData,
                } = values ;

        useEffect(() => {
                return(setValues({ formData : new FormData() }) );
            }, []);

    const handleonSubmit = async event  => {
        event.preventDefault()
            console.log("inside submit")
        try {
            setValues({loading: true, error: ""})
            await fetch("http://localhost:3000/posts/10025/", {
                          method: 'POST',
                          body: formData
                          }).then(response => response.json() )
                  
            setValues({...values, id: '',name: '',type: '',description: '',
                    volume: '', mode: '', Type: '',destination: '',origin: '', TYPE:"", total: '',
                                status:"",userId:"" , formData: ''  })

                props.history.replace("/") 
          } catch(error) {
              setValues({ ...values, error: error})
              return props.history.replace("/1") 
              }
    }

    const handleonchange = name => event => {
            const value =name === "profilepic" ? event.target.files[0] : event.target.value
            formData.set(name, value)
            setValues({...values, [name] : value})  
        }

    const userFormData = () => {
        return ( <form  onSubmit={handleonSubmit} className="text-left">

             <div className="form-group"> 
                        <label className="text-muted"> ID </label>
                        <input type="text" onChange={handleonchange('id')}  value={id || ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> Name </label>
                        <input type="text" onChange={handleonchange('name')}  value={name|| ''} className="form-control" required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> type </label>
                        <input type="text" onChange={handleonchange('type')}  value={type|| ''} className="form-control" required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> description </label>
                        <input type="text" onChange={handleonchange('description')}  value={description|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> volume </label>
                        <input type="text" onChange={handleonchange('volume')}  value={volume|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> mode </label>
                        <input type="text" onChange={handleonchange('mode')}  value={mode|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> Type </label>
                        <input type="text" onChange={handleonchange('Type')}  value={Type|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> Destination </label>
                        <input type="text" onChange={handleonchange('destination')}  value={destination|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> Origin </label>
                        <input type="text" onChange={handleonchange('origin')}  value={origin|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> Type </label>
                        <input type="text" onChange={handleonchange('TYPE')}  value={TYPE|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> Total </label>
                        <input type="text" onChange={handleonchange('total')}  value={total|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> Status </label>
                        <input type="text" onChange={handleonchange('status')}  value={status|| ''} className="form-control"  required/>                                            
             </div>

             <div className="form-group"> 
                        <label className="text-muted"> UserId </label>
                        <input type="text" onChange={handleonchange('userId')}  value={userId|| ''} className="form-control"  required/>                                            
             </div>

        <center>  <button className="btn btn-info" > POST DATA </button>  </center>
        
     </form> 
     
         )
    }

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? "" : 'none' }}> {error} </div>
        )
 
    return(
        <React.Fragment>
            <div className="postUser simpleBackground">
            <h2 style={{padding:'20px', color: 'gray'}}><u><b> Storing Post Request </b></u></h2>
                {showError()}
                {userFormData()}
            </div>    
        </React.Fragment>
        )
    }

export default PostUser