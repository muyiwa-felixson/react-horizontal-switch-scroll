### Quick start guide

## Installing react-horizontal-switch-scroll

```sh
$ npm install --save react-horizontal-switch-scroll
```

## Usage

```sh
import SwitchCarousel from 'react-horizontal-switch-scroll'

const data = [
    {
        name: "home"
        url: "/"
    },
    {
        name: "about"
        url: "/about.html"
    },
    {
        name: "contact"
        url: "/contact.html"
    }
]

const list = (data) => {
    const list_elements = data.map((elem, index) => {
        return (
            <a href={elem.url}>{elem.name}</a>
        )
    });
    return list_elements;
}

.....


class React-Component extends React.Component {


......


render() {
    return (

        
.....

        <SwitchCarousel
            list={list(data)}
            width={250}
            leftButton={<ArrowLeft> < </ArrowLeft>}
            rightButton={<ArrowRight> > </ArrowRight>}
        />

```

