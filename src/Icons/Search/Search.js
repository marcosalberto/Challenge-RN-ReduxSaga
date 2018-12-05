import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Search = props => (
  <Svg width={19} height={19} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.1 12.336a6.532 6.532 0 0 1 9.235-9.237A6.531 6.531 0 1 1 3.1 12.336zm15.726 5.65l-5.248-5.247c2.603-3.032 2.474-7.606-.4-10.478A7.72 7.72 0 1 0 2.26 13.177a7.715 7.715 0 0 0 10.478.401l5.246 5.247h.001a.593.593 0 1 0 .84-.839z"
      fill="#2C2605"
    />
  </Svg>
)

export default Search
