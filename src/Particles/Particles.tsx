import React from "react"
import Particles, { IParticlesParams } from "react-tsparticles"
// import styled from "styled-components"

// const StyledParticles = styled(reactTSParticles)`
//   height: 100%;
//   background: #00022e;
// `
interface IProps {
  options: IParticlesParams
}

class Main extends React.PureComponent<IProps> {
  render(): JSX.Element {
    return <Particles options={this.props.options} className="frame-layout__particles" />
  }
}

export default Main
