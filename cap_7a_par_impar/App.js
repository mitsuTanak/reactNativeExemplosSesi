import React from "react";

import ChecarNumero from "./components/ChecarNumero";

export default class App extends React.Component{
  render() {
    return(
      <ChecarNumero numero={10} />
    )
  }
}