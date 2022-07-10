import React from "react";
import Counter from "./counter";

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            highestCountName: ''
        }; /*compare the names of the buttons with the 
        highest count, so we can update the highest count*/
        this.countClicks = this.countClicks.bind(this);
    }
    
    countClicks(name) {/*this is what increments the state above
     and keep all the names synced across*/
        this.setState(state => {
            state.counts[name]
              ? state.counts[name] += 1
              : state.counts[name] = 1;

              if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name; 
              } /*above we will set highest count = to 
              counts name, aand we will give highest count name 
              the original name */
            return state;           
        }) /*ternary methods above ? and : if the one button
        all ready exists we increment by one; if it doesn't 
        exist, we will set it equal to one and initalize it 
        with its first count; because the states are above, we
        have to pass a lot of the data into the counters
        below*/
    } /*name of the button with the most clicks to be 
    displayed above all the buttons */ 

    render() {
        return (
            <div>
                <h2>{this.state.highestCountName}</h2>
               <Counter 
                  name="one" 
                  count={this.state.counts.one}
                  onClick={this.countClicks} /*onClick is a prop
                  being passed in from handleClick in counter.js,
                  and it points to the countClicks method above;
                  countClicks method gets passed down into this 
                  counter, and the counter takes the prop 
                  and uses it inside handleClick, and handleClick
                  is used inside onClick*/
               />
               <Counter 
                  name="one" 
                  count={this.state.counts.one}
                  onClick={this.countClicks}
               />
               <Counter 
                  name="two" 
                  count={this.state.counts.two}
                  onClick={this.countClicks}
               />
               <Counter 
                  name="three" 
                  count={this.state.counts.three}
                  onClick={this.countClicks}
               />
               
            </div>
            
        );
    }
}
