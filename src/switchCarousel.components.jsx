/**
import SwitchCarousel from './SwitchCarousel.components';
 * @file implement a carousel, depends on react 
 */
const  React  = require('react');
const { ReactDOM } = require('react-dom');
const { ReactResizeDetector } =  require('react-resize-detector');
const  styled  = require('styled-components').default;
const { css } = require('styled-components');

function datatList(Data) {
  return Data.map((elem, INDEX) => {
    return React.createElement(
      "div",
      { key: `SwitchCarousel-element-${INDEX}`, className: "SwitchCarousel-element" },
      elem
    );
  });
  return days;
};

const Wrapper = styled.div`
  display: ${props => props.lean ? 'block' : 'grid'};
  grid-template-columns: ${props => !props.lean && '40px auto 40px'};
  align-items: center;
  overflow: hidden;

  & .SwitchCarousel-directionIcon{
    visibility: ${ props => props.pageWidth > ((props.width * props.length) + 80) ? "hidden" : "visible"};
    text-align: center;
    align-self: center;
    cursor: pointer;
    /* padding: 10px; */
  }
`;
const ListWrapper = styled.div`
  overflow: hidden;
`;
const List = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(${props => props.length}, ${props => props.width}px);
    margin:0;
    padding:0;
    width: 9000px;
    transition: all 0.3s ease-out;
    transform: translate3d(0 0 0);
    z-index: 10;
    ${props => props.currentView && css`
      transform: translateX(-${props => props.currentView * props.width}px);
    `}
    ${props => props.pageWidth > (props.width * props.length) + 80 && css`
      transform: translateX(0);
    `}
    & .SwitchCarousel-element{
        display: block;
        width: ${props => props.width}px;
    }
`;

class  SwitchCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementWidth: 0,
      elementHeight: 0,
      currentView: 0,
      selected: 0
    };
  }

  onResize(width, height) {
    this.setState({
      elementWidth: width,
      elementHeight: height
    });
  }

  switchView(reverse) {
    const length = this.props.list.length;

    const viewable = this.props.leftButton ? Math.floor(this.state.elementWidth / this.props.width) : Math.floor((this.state.elementWidth - 80) / this.props.width);

    let current;
    if (reverse) {
      current = this.state.currentView > 0 && this.state.currentView - 1;
    } else {
      current = this.state.currentView < length - viewable && this.state.currentView + 1;
    }
    this.setState({
      currentView: current
    });
  }

  render() {
    return React.createElement(
      "div",
      { className: this.props.className },
      React.createElement(ReactResizeDetector, {
        handleWidth: true,
        handleHeight: true,
        onResize: this.onResize,
        render: ({ width }) => React.createElement(
          Wrapper,
          { pageWidth: width, width: this.props.width, length: this.props.list.length, lean: this.props.leftButton },
          React.createElement(
            "div",
            { className: "SwitchCarousel-directionIcon", onClick: () => this.switchView(true) },
            this.props.leftButton ? this.props.leftButton : React.createElement(
              "div",
              { className: "dayIcon" },
              React.createElement("i", { className: "icon-left-open" })
            )
          ),
          React.createElement(
            ListWrapper,
            null,
            React.createElement(
              List,
              { pageWidth: width, width: this.props.width, length: this.props.list.length, currentView: this.state.currentView },
              datatList(this.props.list)
            )
          ),
          React.createElement(
            "div",
            { className: "SwitchCarousel-directionIcon", onClick: () => this.switchView() },
            this.props.leftButton ? this.props.rightButton : React.createElement(
              "div",
              { className: "dayIcon" },
              React.createElement("i", { className: "icon-right-open" })
            )
          )
        )
      })
    );
  }

}
console.log(SwitchCarousel);
module.exports =  SwitchCarousel 