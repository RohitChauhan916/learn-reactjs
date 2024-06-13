function Header(props){
    console.log(props.email);
    return (
        <div>
        <h1>Welcome to header</h1>
        <div>{props.email}</div>
        <p>yes</p>
        </div>
    )
}

export default Header;