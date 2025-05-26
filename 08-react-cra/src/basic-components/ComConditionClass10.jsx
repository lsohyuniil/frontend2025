import { Component } from "react";

class ComConditionClass10 extends Component {
  // 변수선언
  constructor(props) {
    super(props);
    this.state = { isToggle: true };
    this.handleToggle = this.handleToggle.bind(this);
  }

  // 메서드
  handleToggle() {
    this.setState((state) => ({
      isToggle: !state.isToggle,
    }));
  }

  // 화면에 보여질 부분
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.isToggle ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
export default ComConditionClass10;
