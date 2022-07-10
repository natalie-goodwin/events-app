import React from "react";

export default class SecondCounter extends React.Component {
 constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
        currentCount: props.start || 0
    }; //if there's nothing in props, it will start by default at 0
 }
 
 render() {
    console.log('render');
    return(
        <p>{this.state.currentCount}</p>
    );
 }

    componentDidMount() {
        console.log('componentDidMount');
        this.timer=setInterval(() => {
            this.setState((state) => ({
                currentCount: state.currentCount + 1
            }));
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return nextState.currentCount % 2 === 0; 
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
    }    
} /*this second counter will be put into a container; which 
will control how it counts -- whether the counter is being 
displayed or turned off*/



















/*Lifecycle methods: classes that extend React.Component 
come with inherited lifecycle methods; we can override these 
methods to run code at specific times to  during a component's
lifecycle; lifecycle is divided into 3 sections: mounting 
(when a component is being created and inserted into the DOM; 
constructor is called as first method of the lifecycle and is 
used to initialize state and bind methods for events; render 
is the only method required when you create a class component;
it returns react elements that are mounted to the DOM - 
typically JSX; when a component has been added successfully 
to the DOM, the componentDidMount method will fire; this is 
where you should make network calls); updating (render method
is used again and is the first method in the updating phase; 
this method gets called anytime a component must update due 
to props being passed in, the setState method being called, 
or the force Update method being called; once a component 
has updated there is a componentDidUpdate method that we can 
override; this method will not be called after the initial 
render, but only for each additional render, while the 
componentDidMount will only be called for the first render; 
shouldComponentUpdate method allows us to say whether a 
component should update when state or props change, 
depending on what those changes are); unmounting (contains 
componentWillUnmount method; a place to clean up anything
our component created, such as subscriptions, so we don't 
cause a memory leak) */
