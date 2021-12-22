import React, { ReactElement } from 'react'
import './GameHeader.css';


interface Props {
  message: string,
}

export default function GameHeader({message}: Props): ReactElement {
  return (
    <div className="center">
      {message}
    </div>
  )
}
