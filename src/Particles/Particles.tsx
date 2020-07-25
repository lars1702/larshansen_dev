import React from "react"
import config from "./config"
import ParticlesTS from "react-tsparticles"
import styled from "styled-components"

const StyledParticles = styled(ParticlesTS)`
  height: 100%;
  background: #00022e;
`

const Particles = (): JSX.Element => <StyledParticles height="100%" params={config} />

//sdfsd

export default Particles
