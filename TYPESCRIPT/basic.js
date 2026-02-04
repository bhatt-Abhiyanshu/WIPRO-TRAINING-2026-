var User = /** @class */ (function () {
    function User() {
        this.username = "";
        this.password = "";
    }
    User.prototype.input = function (username, password) {
        this.username = username;
        this.password = password;
    };
    User.prototype.display = function () {
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
    };
    return User;
}());
var user1 = new User();
user1.input("abhy", "2002");
user1.display();
