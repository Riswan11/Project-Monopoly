import React, { ReactElement } from 'react'
import { TileRotation, PropertyInfo, PlayerToken } from '../Types'
import'./Tile.css'
import { ISize } from '@fluentui/react'
import pool from '../png/001-pool.png';
import dartboard from '../png/008-dartboard.png';
import heart from '../png/029-heart.png';
import ghost from '../png/012-ghost.png';
import bomb from '../png/023-bomb.png';
import diamond from '../png/030-diamond.png';
import trophy from '../png/011-trophy.png'
import spinner from '../png/015-spinner.png'
import bonds from '../png/stocks.png'
import pubsc from '../png/pubsc.jpg';
import chance from '../png/chance.png';
import community from '../png/community.png';
import boardingsc from '../png/boardingsc.png';
import hospital from '../png/hosp.png';
import privatesc from '../png/privatesc.png';
import jar from '../png/jar.png'
import chartersc from '../png/chartersc.png'
import grocery from '../png/grocery.png'
import jail from '../png/jail.png';
import goto from '../png/gotojail.gif'
import go from '../png/go.png'
import freep from '../png/parking.png'


interface Props {
  style: object,
  size: ISize,
  rotation: TileRotation,
  propertyInfo: PropertyInfo,
  playerTokens: PlayerToken[],
  id: string,
}
export default function Tile({
  style,
  size,
  rotation,
  propertyInfo,
  playerTokens,
}: Props): ReactElement {
  const containerStyle = {
    width: size.width + 'px',
    height: size.height + 'px',
    maxWidth: size.width + 'px',
    maxHeight: size.height + 'px',
  }
let imgsrc=(playerToken: PlayerToken):any=>{
  if(playerToken.toString()=="pool"){
    return <img src={pool} width="20" height="20"alt= {playerToken.toString()}/>
    }
    else if(playerToken.toString()=="dartboard"){
      return <img src={dartboard} width="20" height="20"alt= {playerToken.toString()}/>
    }
    else if(playerToken.toString()=="heart"){
      return <img src={heart} width="20" height="20"alt= {playerToken.toString()}/>
    }      
    else if(playerToken.toString()=="ghost"){
      return <img src={ghost} width="20" height="20"alt= {playerToken.toString()}/>
    }
    else if(playerToken.toString()=="bomb"){
      return <img src={bomb} width="20" height="20"alt= {playerToken.toString()}/>
    } 
    else if(playerToken.toString()=="diamond"){
      return <img src={diamond} width="20" height="20"alt= {playerToken.toString()}/>
    }      
    else if(playerToken.toString()=="trophy"){
      return <img src={trophy} width="20" height="20"alt= {playerToken.toString()}/>
    }       
    else if(playerToken.toString()=="spinner"){
      return <img src={spinner} width="20" height="20"alt= {playerToken.toString()}/>
    }  
}
let stylespec=(index:number)=>{
  if(index==1||index==3){
    // id="dpurp";
    return{backgroundColor: "#8e4eb6"}
  }
  else if(index==9||index==8||index==6){
    // id="liblue";
    return{backgroundColor: "#d2eaf5"};
  }
  else if(index==4){
    // id="income tax";
    return{backgroundColor: "white"};
  }
  else if(index==5){
    // id="publicsc"
    return{backgroundColor: "white"};
  }
  else if(index==7 ||index==22|| index==36){
    // id="chance"
    return{backgroundColor: "#white"};
  }
  else if(index==11||index==13||index==14){
    // id="lipurp";
    return{backgroundColor: "#b02f7c"};
  }
  else if(index==12){
    // id="hospital";
    return{backgroundColor: "#white"};
  }
  else if(index==15){
    // id="chartersc";
    return{backgroundColor: "white"};
  }
  else if(index==16||index==18||index==19){
    // id="orange";
    return{backgroundColor: "#fa811d"};
  }
  else if(index==31||index==32||index==34){
    // id="green";
    return{backgroundColor: "#41994e"};
  }
  else if(index==37||index==39){
    // id="dblue";
    return{backgroundColor: "#5a6dba"};
  }
  else if(index==2||index==17||index==33){
    // id="community";
    return{backgroundColor: "white"};
  }
  else if(index==35){
    // id="boardingsc";
    return{backgroundColor: "white"};
  }
  else if (index==38){
    // id="retirement";
    return{backgroundColor: "white"};
  }
  else if(index==21||index==23||index==24){
    // id="red";
    return{backgroundColor: "#f50c2b"};
  }
  else if(index==26||index==27||index==29){
    // id="yellow";
    return{backgroundColor: "#ffed20"};
  }
  else if(index==25){
    // id="privatesc";
    return{backgroundColor: "white"};
  }
  else if(index==28){
    // id="wholefoods"
    return{backgroundColor: "white"};
  }
}
let tileIcon=(index:number): any=> {
  if(index==4){
    // id="income tax";
    return <img src={bonds} width="40" height="40"/>
  }
  else if(index==5){
    // id="publicsc"
    return <img src={pubsc} width="40" height="40"/>
  }
  else if(index==7 ||index==22|| index==36){
    // id="chance"
    return <img className="chance" src={chance} width="40" height="40"/>
  }
  else if(index==12){
    // id="hospital";
    return <img src={hospital} width="40" height="40"/>
  }
  else if(index==15){
    // id="chartersc";
    return <img src={chartersc} width="40" height="40"/>
  }
  else if(index==2||index==17||index==33){
    // id="community";
    return <img src={community} width="40" height="40"/>
  }
  else if(index==35){
    // id="boardingsc";
    return <img src={boardingsc} width="40" height="40"/>
  }
  else if (index==38){
    // id="retirement";
    return <img src={jar} width="40" height="40"/>
  }
  else if(index==25){
    // id="privatesc";
    return <img src={privatesc} width="40" height="40"/>
  }
  else if(index==28){
    // id="wholefoods"
    return <img src={grocery} width="40" height="40"/>
  }
  else if(index==0){
    return <img src={go} width="55" height="55"/>
  }
  else if(index==10){
    return <img src={jail} width="55" height="55"/>
  }
  else if(index==20){
    return <img src={freep} width="55" height="55"/>
  }
  else if(index==30){
    return <img src={goto} width="55" height="55"/>
  }
}
  return (
    <div className={rotation.toString()} style={style}>
      <div className="container tile" style={containerStyle}>
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <div className="name" dangerouslySetInnerHTML={{ __html: propertyInfo.name }} style={stylespec(propertyInfo.index)} />
              <span className="tilepic">
                  {
                    tileIcon(propertyInfo.index)                 
                  }
              </span>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
            {
              propertyInfo.price > 0
                ? <span className="price">${propertyInfo.price}</span>
                : <span></span>
            }
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <div className="token">
                <span>
                  {
                    playerTokens.map(playerToken => imgsrc(playerToken))                     
                  }
                {/* <script> 
                  document.getElementById('imageBox').src = playerToken.toString();
                </script> */}
                </span>
              </div>
               {/* <span>
                {
                  playerTokens.map(playerToken => playerToken.toString().join("|"))
                }
              </span> */}
            </div>
          </div>
          {/* <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
            {
              propertyInfo.price > 0
                ? <span className="price">${propertyInfo.price}</span>
                : <span></span>
            }
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
