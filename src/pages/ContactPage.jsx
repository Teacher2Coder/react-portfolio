export default function ContactPage() {
    return (
        <div>
            <div className="card contact-card">
                <div className="card-body">
                    <form className="contact-form">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="email"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="email"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" id="send-message">Send!</button>
                    </form>
                </div>
            </div>
            <p className="text-danger" id="error-message">This is an error message</p>
        </div>
    )
}