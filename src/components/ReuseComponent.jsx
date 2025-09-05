function ContactCard(props){
    return (
        <>
            <div className="card">
                <h1>{props.name} Contact Information</h1>
                <p>{props.des}</p>
                <button>Contact</button>
            </div>
        </>
    )
}




export default ContactCard






