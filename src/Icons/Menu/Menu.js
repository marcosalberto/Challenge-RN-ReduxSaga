import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Menu = props => (
  <Svg width={19} height={16} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.73 1.455h17.54A.73.73 0 0 0 19 .727.73.73 0 0 0 18.27 0H.73A.73.73 0 0 0 0 .727a.73.73 0 0 0 .73.728zM18.27 7.273H.73A.73.73 0 0 0 0 8a.73.73 0 0 0 .73.727h17.54A.73.73 0 0 0 19 8a.73.73 0 0 0-.73-.727zM18.27 14.546H.73a.73.73 0 0 0-.73.727.73.73 0 0 0 .73.727h17.54c.403 0 .73-.326.73-.727a.729.729 0 0 0-.73-.727z"
      fill="#2C2605"
    />
  </Svg>
)

export default Menu
