import React, { ReactElement, Fragment } from 'react'
import { PlayerModel, AssetsModel } from '../Types'
import './PlayerAssets.css';

interface Props {
  player: PlayerModel,
  assets: AssetsModel,
}

export default function PlayerAssets({player, assets}: Props): ReactElement {
  return (
    <div className="assets">
      <h4 className="title"> Assets: </h4>
      <p className="cat">
      <strong>Name: {player.name}</strong>
      <br/>
      <br/>
      <strong>Money: ${assets.amount}</strong>
      <br/>
      <br/>
      <strong>Properties Owned: </strong>
      <br/>
      <br/>
      {
        assets.properties.map(p => (
          <Fragment>
            <div>{p.name.replace("<br/>", " ")}</div>
            <br/>
          </Fragment>
        ))
      }
      </p>
    </div>
  )
}
