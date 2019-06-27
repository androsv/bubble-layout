import React from "react";
import "./select-workload.scss";

class SelectWorkload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBubble: "bubble1",
      prevBubble: ""
    };
    this.bubble1 = React.createRef();
    this.bubble2 = React.createRef();
    this.bubble3 = React.createRef();
    this.bubble4 = React.createRef();
    this.bubble5 = React.createRef();
  }
  makeMain = event => {
    let currentMainRef = this.state.mainBubble;
    let swapBubbleId = event.target.id;
    let swapBubbleClass = event.target.classList.value;
    let oldContent = this[currentMainRef].current.textContent;

    if (
      event.target.classList.value === "main-bubble" ||
      event.target.classList.value === "dnd"
    ) {
    } else {
      this[currentMainRef].current.classList.remove(
        "checkmark",
        "draw",
        "main-bubble"
      );
      this[currentMainRef].current.textContent = oldContent;
      this[currentMainRef].current.classList.add(
        swapBubbleClass.split(" ")[0],
        swapBubbleClass.split(" ")[1]
      );
      event.target.classList.remove(
        swapBubbleClass.split(" ")[0],
        swapBubbleClass.split(" ")[1]
      );
      event.target.classList.add("main-bubble", "checkmark", "draw");
      this.setState(
        { mainBubble: swapBubbleId, prevBubble: currentMainRef },
        () => {
          setTimeout(() => {
            this[this.state.mainBubble].current.textContent = "";
          }, 10);
        }
      );
    }
  };

  render() {
    return (
      <div className="select-workload">
        <button
          id="bubble1"
          ref={this.bubble1}
          className="main-bubble"
          onClick={this.makeMain}
        >
          workload 1
        </button>
        <button
          id="bubble2"
          ref={this.bubble2}
          className="side-bubble side-bubble-2"
          onClick={this.makeMain}
        >
          workload 2
        </button>
        <button
          id="bubble3"
          ref={this.bubble3}
          className="side-bubble side-bubble-3"
          onClick={this.makeMain}
        >
          workload 3
        </button>
        <button
          id="bubble4"
          ref={this.bubble4}
          className="side-bubble side-bubble-4"
          onClick={this.makeMain}
        >
          workload 4
        </button>
        <button
          id="bubble5"
          ref={this.bubble5}
          className="side-bubble side-bubble-5"
          onClick={this.makeMain}
        >
          workload 5
        </button>
      </div>
    );
  }
}

export default SelectWorkload;
