import React, {FunctionComponent, CSSProperties} from 'react'

interface Props {
  style: CSSProperties
}

export const SpringTest: FunctionComponent<Props> = ({style}) => {
  return (
    <div className="spring-test" style={style}>
      TEST
    </div>
  )
}
