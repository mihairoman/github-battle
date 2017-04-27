import React from 'react';
import ReactDOM from 'react-dom';

var ProfilePic = React.createClass({
    render: function () {
        console.log(this.props.imgURL);
        return (<img src={this.props.imgURL} alt="User image profile" style={{height: 100, width: 100}}/>);
    }
});

var Link = React.createClass({
    changeURL: function() {
        window.location.replace(this.props.href);
    },

    render: function() {
        return (
            <span 
                style={{ color: 'blue', cursor: 'pointer'}}
                onClick={this.changeURL} >
                {this.props.children}
            </span>
        );
    }
});

var ProfileLink = React.createClass({
   render: function() {
       return (
           <Link>
               <a href={'https://github.com/' + this.props.username}> {this.props.username} </a>
           </Link>
       );
   } 
});

var ProfileName = React.createClass({
    render: function() {
        return <div>{this.props.name}</div>
    }
});

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic imgURL={this.props.user.image}/>
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        );
    }
});

export default Avatar;