import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ArrowLeft = props => (
  <Svg width={20} height={11} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.945 4.889H2.087l3.845-3.846A.611.611 0 1 0 5.068.18L.179 5.068a.611.611 0 0 0 .002.865l4.887 4.888a.61.61 0 0 0 .864 0 .611.611 0 0 0 0-.864L2.087 6.11h16.858a.611.611 0 0 0 0-1.222z"
      fill="#2C2605"
    />
  </Svg>
)

export default ArrowLeft
