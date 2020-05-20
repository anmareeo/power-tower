import React from 'react'
import { List } from 'semantic-ui-react'
    
const Power = () => (
      <List as='ul'>
       <List.Item as='li'><strong>
        Combo Power System</strong>
          <List.List as='ul'>
            <List.Item as='li'>Kubota diesel generator/ battery combo</List.Item>
            <List.Item as='li'>“Always On” technology 24/7/365 – no need to worry about turning generator on/off</List.Item>
            <List.Item as='li'>80 amps of CLEAN power</List.Item>
            <List.Item as='li'>Two(2) 120v and Onea(1) 240v outlets</List.Item>
            <List.Item as='li'>Cut emissions and noise up to 93%</List.Item>
            <List.Item as='li'>Remote monitoring and control</List.Item>
          </List.List>
        </List.Item><br></br>
        <List.Item as='li'>
         <strong>  
        Air Compressor</strong> 
          <List.List as='ul'>
            <List.Item as='li'>4.2 CFM @ 90 lbs. </List.Item>
            <List.Item as='li'>Two connectors</List.Item>
          </List.List>
        </List.Item>
      </List>
    )
    
    export default Power



