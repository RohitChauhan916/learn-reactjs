function Header(props){
    console.log(props.headerInfo.email);
    return (
        <div>
        <h1>Welcome to header</h1>
        <div>{props.headerInfo.email}</div>
        <p>yes</p>
        </div>
    )
}

export default Header;