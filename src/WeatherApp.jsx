import React,{useState} from 'react';
import './Weather.css'

let WeatherApp=()=> {

    let [city,setCity]=useState("")


    let [result,setResult]=useState("")



    let changeHandler=(event)=>{
        setCity(event.target.value)
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
        .then(
            response=>response.json()
        ).then((data)=>{
            let kelvin=data.main.temp
            let celcius=kelvin-273.15
            setResult("Temperature at " + " " +city  + " is" + "\n\n"+ Math.round(celcius) + 'C')
            setCity("");
    }).catch((error)=>{
        console.log(error)
    })
    }

  return(
    <React.Fragment>
       <center>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className='card-title'>Weather App</h4>
                        </div>   
                                <form onSubmit={submitHandler}>
                                    <input type='text' name='city' value={city} onChange={changeHandler}></input><br /> <br /> 
                                    <input type='submit' value='Get Temperature'></input>   
                                </form>  
                                <h3>{result}</h3>       
                    </div>
                </div>
            </div>
        </div>
       </center>
    </React.Fragment>
  );
  
}

export default WeatherApp;
