import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Heart = props => (
  <Svg width={17} height={15} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.68 1.053c-.975 0-1.89.387-2.578 1.09-1.424 1.455-1.424 3.82 0 5.275l6.174 6.31 6.174-6.31c1.423-1.454 1.423-3.82 0-5.274a3.582 3.582 0 0 0-2.578-1.091c-.974 0-1.889.387-2.578 1.09-.214.22-.407.477-.57.765a.517.517 0 0 1-.448.262.517.517 0 0 1-.448-.262 3.705 3.705 0 0 0-.571-.764 3.583 3.583 0 0 0-2.578-1.091zM8.275 15a.513.513 0 0 1-.367-.155L1.369 8.16c-1.825-1.864-1.825-4.896 0-6.76A4.601 4.601 0 0 1 4.678 0a4.602 4.602 0 0 1 3.597 1.722A4.603 4.603 0 0 1 11.873 0c1.25 0 2.426.498 3.31 1.401 1.825 1.864 1.825 4.896 0 6.76l-6.541 6.684a.512.512 0 0 1-.366.155z"
      fill="#fff"
    />
  </Svg>
)

export default Heart
