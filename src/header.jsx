function Header({headerInfo,children}){
    return (
        <div>
            {children}
        <h1>Welcome to header</h1>
        <div>{headerInfo.email}</div>
        <p>yes</p>
        </div>
    )
}

export default Header;