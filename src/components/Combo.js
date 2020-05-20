import React from 'react'
import { List } from 'semantic-ui-react'
    
const Combo = () => (
      <List as='ul'>
       <List.Item as='li'><strong>
        Carefree Lease Includes:</strong>
          <List.List as='ul'>
            <List.Item as='li'>Delivery and Pickup</List.Item>
            <List.Item as='li'>Setup</List.Item>
            <List.Item as='li'>Fuel</List.Item>
            <List.Item as='li'>Maintenance</List.Item>
          </List.List>
        </List.Item>
        </List>
)
    export default Combo