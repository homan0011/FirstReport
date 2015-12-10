//var [div, input, ul, li] = ["div", "input", "ul", "li"].map(React.createFactory);
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

// var LoginForm = React.createElement({
// 	render: function(){
// 		return(
// 		);
// 	}
// });

var App = React.createClass({
	handleButtOnClick: function(event){
		console.log(event.target.id);
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
				)
			)
			// React.createElement("div", null,
			// 	React.createElement(
			// 		Button,
			// 		{
			// 			onClick: this.handleButtOnClick,
			// 			id: "loginButton",
			// 			label: "Login"
			// 		},
			// 		null
			// 	),

			// 	React.createElement(
			// 		Button,
			// 		{
			// 			onClick: this.handleButtOnClick,
			// 			id: "regButton",
			// 			label: "Register"
			// 		},
			// 		null
			// 	)
			// )
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById("content"));