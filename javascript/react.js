var div = React.createFactory("div");
var form = React.createFactory("form");
var input = React.createFactory("input");

var Button = React.createClass({
	render: function(){
		return(
			div(
				{
					id: this.props.id,
					className: "div-button",
					onClick: this.props.onClick
				}, 
				this.props.label
			)
		);
	}
});
var myButton = React.createFactory(Button);

var LoginForm = React.createClass({
	render: function(){
		return(
			form(
				null,
				div(null, "Login"),
				input(null)
			)
		);
	}
});
var myloginForm = React.createFactory(LoginForm);

var RegForm = React.createClass({
	render: function(){
		return(
			form(
				null,
				div(null, "Register"),
				input(null)
			)
		);
	}
});
var myRegForm = React.createFactory(RegForm);

var LoginApp = React.createClass({
	getInitialState: function(){
		return {currentForm: myloginForm(null)};
	},

	handleButtOnClick: function(event){
		if(event.target.id == "loginButton"){
			this.setState({currentForm: myloginForm(null)});
		}else{
			this.setState({currentForm: myRegForm(null)});
		}
	},

	render: function(){
		return(
			div(
				null,
				myButton({
					onClick: this.handleButtOnClick,
					id: "loginButton",
					label: "Login"
				}),
				myButton({
					onClick: this.handleButtOnClick,
					id: "regButton",
					label: "Register"
				}
				),
				this.state.currentForm
			)
		);
	}
});

ReactDOM.render(React.createElement(LoginApp, null), document.getElementById("content"));