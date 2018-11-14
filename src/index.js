import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle={
    margin: '0 auto',
    padding: '40px',
    background:'#efeefe',
    display:'block',
    align:'center'
}

class Clock extends Component{
constructor(props){
    super(props);
    this.state={
        date: ''
    }
}
    render(){
        return(
            <div>{this.state.date}</div>
        );
    }

    componentDidMount(){
        this.timerID = setInterval(
            () =>this.tick(),1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);

    }

    tick(){
        this.setState({
            date: 
            
            <div className="container-fluid" style={divStyle}><h1>The time now is: <Moment format="h:mm:ss a"/></h1>
            </div>
        });
    }

}

ReactDOM.render(
    <Clock />, document.getElementById('root')
);