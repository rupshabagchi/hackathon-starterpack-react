import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['hello', 'world', 'click', 'me']
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        {/* At the initial mount, all children of the CSSTransitionGroup
          will appear but not enter. However, all children later added to
          an existing CSSTransitionGroup will enter but not appear.
        */}
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          >{/* ...to animate initial appear:
            transitionAppear={true}
            transitionAppearTimeout={500} 
            */}
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

/* Demo Stylesheet (-enter/-leave/-appear/-active are default)
.example-enter {
  opacity: 0.01;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.example-leave {
  opacity: 1;
}

.example-leave.example-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}

---------------- optionally also: 
.example-appear {
  opacity: 0.01;
}

.example-appear.example-appear-active {
  opacity: 1;
  transition: opacity .5s ease-in;
}
*/

