function Login() {
return (
<div className="row justify-content-center">
<div className="col-md-5">
<h2 className="text-center mb-3">Login</h2>
<form className="card p-4 shadow">
<div className="mb-3">
<label className="form-label">Email</label>
<input type="email" className="form-control" placeholder="Enter email" />
</div>
<div className="mb-3">
<label className="form-label">Password</label>
<input type="password" className="form-control" placeholder="Enter password" />
</div>
<button className="btn btn-primary w-100">Login</button>
</form>
</div>
</div>
)
}


export default Login
