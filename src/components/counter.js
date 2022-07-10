/*Putting a function directly in the onclick attribute of a 
JSX button
 */
/*when a button is clicked, this component will count how many 
times it has been clicked
 */

import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);        
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        this.props.onClick(this.props.name);
    } /*this method can be used in place of anonymous function 
    below; this will only have name of method; we also add 
    this to constructor above, and render as below; here, 
    define the function you want to happen, bind above, and render
    as below
    */ 

    render() {
      return (
        <button
        className="btn btn-primary"
        onClick={this.handleClick}>
        {this.props.name} {this.props.count} 
        </button>
      ); /*everything gets passed down through props, 
      and the state is handles at the parent container 
      component*/
    } /*whether you follow this bind method or the other
    render method is a matter of preference; if we use a 
    named method and bind it, we can reuse it somewhere else 
    if we need to: handleClick can be reused. */
} /*there's a wall when it comes to synchronizing the 
counters of a single component because each instance owns
its own state; state flows down in a unidirectional flow; 
we can store the state of our counter buttons in their parent 
component, a process known as 'Raising the state' which 
will allow parent to maintain state of the counter button and
pass down changes to children counter components through props
 */
//Below is original render method, but above is preferred -reusable- method
    //render() { this will be the anonymous function method 
    //of rendering
      //  return (
        //    <button
          //     className="btn btn primary"
            //   onClick={() => this.setState(state =>({count: state.count + 1}))}>
              // Counter {this.state.count} 
         //   </button> we will display the count inside the button 
        //)unlike with HTML onClick is camelCase in JSX, arrow function
        //is used so the 'this' keyword will work properly inside 
        //the function; if we don't want to use an anonymous function,
        //and we want to used named functions and methods instead, 
        //we need to bind 'this' to the event 
    //}