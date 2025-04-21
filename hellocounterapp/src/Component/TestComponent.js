function TestComponent(props) {
    return (
        <div>
            {/* Accessing information from props */}
            <h1>Welcome {props.username}</h1>
            <h1>Your password is  {props.password}</h1>
        </div>
    );


}
export default TestComponent;
