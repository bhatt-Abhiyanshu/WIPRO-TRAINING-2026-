function Contact() {
return (
<div className="row justify-content-center">
<div className="col-md-6">
<h2 className="text-center mb-3">Contact Us</h2>
<form className="card p-4 shadow">
<div className="mb-3">
<label className="form-label">Name</label>
<input type="text" className="form-control" placeholder="Your name" />
</div>
<div className="mb-3">
<label className="form-label">Email</label>
<input type="email" className="form-control" placeholder="Your email" />
</div>
<div className="mb-3">
<label className="form-label">Message</label>
<textarea className="form-control" rows="4"></textarea>
</div>
<button className="btn btn-success w-100">Submit</button>
</form>
</div>
</div>
)
}


export default Contact