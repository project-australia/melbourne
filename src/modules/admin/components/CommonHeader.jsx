import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

import './style/CommonHeader.css'

const CommonHeader = props => {
  return (
    <div className="ch-wrapper">
      <Icon name={props.iconName} size="big" />
      <span className="ch-title">{props.title}</span>
    </div>
  )
}

CommonHeader.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default CommonHeader
