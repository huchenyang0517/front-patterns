// Enforce separation of concerns by separating the view from the application logic
// Presentational Components: Components that care about how data is shown to the user.

// import React from "react";
//
// export default function DogImages({ dogs }) {
//     return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
// }
//
// Container Components: Components that care about what data is shown to the user.
//
// import React from "react";
// import DogImages from "./DogImages";
//
// export default class DogImagesContainer extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             dogs: []
//         };
//     }
//
//     componentDidMount() {
//         fetch("https://dog.ceo/api/breed/labrador/images/random/6")
//             .then(res => res.json())
//             .then(({ message }) => this.setState({ dogs: message }));
//     }
//
//     render() {
//         return <DogImages dogs={this.state.dogs} />;
//     }
// }
