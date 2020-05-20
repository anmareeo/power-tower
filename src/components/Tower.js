import React from 'react'
import { List } from 'semantic-ui-react'

const Tower = () => (
    <List as='ul'>
    <List.Item as='li'><strong>
    Telescoping Mast</strong>
       <List.List as='ul'>
        <List.Item as='li'>30’ pneumatic aluminum mast</List.Item>
        <List.Item as='li'>Five vertical locking sections for safety</List.Item>
        <List.Item as='li'>Retracting power cable – no cable mess</List.Item>
        <List.Item as='li'>Withstands winds up to 65 mph</List.Item>
      </List.List>
    </List.Item><br></br>

    <List.Item as='li'><strong>
    Surveillance</strong>
       <List.List as='ul'>
        <List.Item as='li'>360 degree horizon to horizon coverage</List.Item>
        <List.Item as='li'>Four (type / resolution of camera)</List.Item>
        <List.Item as='li'>Remote smart device visibility</List.Item>
        <List.Item as='li'>Automatic cloud storage</List.Item>
      </List.List>
    </List.Item><br></br>

    <List.Item as='li'><strong>
    Lighting</strong>
       <List.List as='ul'>
        <List.Item as='li'>Two 240-watt LED light fixtures - 135,000 lumens</List.Item>
        <List.Item as='li'>Four (type / resolution of camera)</List.Item>
        <List.Item as='li'>Remote manual light on/off</List.Item>
        <List.Item as='li'>Automated dusk to dawn operation</List.Item>
      </List.List>
    </List.Item><br></br>
    
    <List.Item as='li'><strong>
    Wi-Fi</strong>
       <List.List as='ul'>
        <List.Item as='li'>Speed</List.Item>
        <List.Item as='li'>600’ perimeter</List.Item>
        
      </List.List>
    </List.Item>
  </List>

  )
  
export default Tower
