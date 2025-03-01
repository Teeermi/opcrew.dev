import { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("a78a1d7b-0512-41e9-bb17-378a725fb01c");
  }

  render() {
    return null;
  }
}
export default CrispChat;
