interface propsType{
    title:string
}
const HomePage=(props:propsType)=>{
    console.log(props)
    return(
        <h1 id="value-box">{props.title}</h1>
    )
}

export default HomePage;