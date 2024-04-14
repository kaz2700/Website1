import Navbar from "../Components/NavBar";

export default function Todo() {
    const todohtml = 
    <>
            <div>Chat</div>
            <div>Remove Login and Register and Add My Account when logged in</div>    
            <div>Customize navbar</div>
            <div>Only admin can access todo</div>
            <div>Only logged in can access chat</div>
            <div>save the log in so it doesnt change when navigating</div>
            <div>the security looks shit to me w the localstorage shit so fix it so its safe</div>
    </>
    return (
        <>
            <Navbar />
            {JSON.parse(localStorage.getItem("loggedInUser")) !== null && JSON.parse(localStorage.getItem("loggedInUser")).username === "admin" ? todohtml: "Permission denied."}
        </>
    )
}