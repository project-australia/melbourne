import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Input, Dropdown } from 'semantic-ui-react'

import './style/UserEdit.css'

class UserEdit extends Component {
  state = {
    id: '',
    role: '',
    name: '',
    email: '',
    birthDate: '',
    telephone: '',
    school: '',
    balance: '',
    paypalAccount: '',
    venmoAccount: '',
    requestStatus: '',
    state: '',
    city: '',
    zipCode: '',
    street: '',
    referredBy: ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.item && nextProps.item.email) {
      this.fillInputs(nextProps.item)
    }
  }
  fillInputs = (user) => {
    this.setState({
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate || '',
      telephone: user.telephone || '',
      school: user.school || '',
      balance: user.wallet.balance || '',
      paypalAccount: user.wallet.paypalAccount || '',
      venmoAccount: user.wallet.venmoAccount || '',
      requestStatus: user.wallet.status,
      state: user.address.state || '',
      city: user.address.city || '',
      zipCode: user.address.zipCode || '',
      street: user.address.street || '',
      referredBy: user.referredBy || '',
      club: user.club || ''
    })
  }

  updateItem = () => {
    this.props.updateFunction(this.state)
    this.props.toggleModal()
  }

  handleRoleChange = (e, { value }) => this.setState({ role: value })
  handleClubChange = (e, { value }) => this.setState({ club: value })
  handleRequestStatusChange = (e, { value }) => this.setState({ requestStatus: value })
  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })
  handleInputBallance = (e) => {
    this.setState({ [e.target.name]: e.target.value.replace(',', '.') })
  }
  walletStatusOptions = () => [
    { key: 'NONE', value: 'NONE', text: 'NONE' },
    { key: 'PENDING', value: 'PENDING', text: 'PENDING' }
  ]
  clubOptions = () => [
    { key: 'NONE', value: 'NONE', text: 'NONE' },
    { key: 'TWENTY', value: 'TWENTY', text: 'ELITE CLUB' }
  ]
  roleOptions = () => [
    { key: 'ADMIN', value: 'ADMIN', text: 'ADMIN' },
    { key: 'REP', value: 'REP', text: 'REP' },
    { key: 'USER', value: 'USER', text: 'USER' }
  ]
  render () {
    return (
      <Modal
        size='tiny'
        open={this.props.openModal}
        onClose={this.props.toggleModal}
        style={{marginTop: '1%', margin: '1% auto'}}
      >
        <Modal.Header>
          Edit Profile
        </Modal.Header>
        <Modal.Content>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Name
              </span>
              <span className="ue-info">
                <Input
                  name='name'
                  value={this.state.name}
                  disabled
                  fluid
                  placeholder='Name' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Email
              </span>
              <span className="ue-info">
                <Input
                  name='email'
                  value={this.state.email}
                  disabled
                  fluid
                  placeholder='Email' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Birthdate
              </span>
              <span className="ue-info">
                <Input
                  name='birthDate'
                  disabled
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.birthDate}
                  placeholder='Birthdate' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Telephone
              </span>
              <span className="ue-info">
                <Input
                  name='telephone'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.telephone}
                  placeholder='Telephone' />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Club
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Club"
                  onChange={this.handleClubChange}
                  selection
                  value={this.state.club}
                  options={this.clubOptions()} />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                 Wallet Ballance
              </span>
              <span className="ue-info">
                <Input
                  name='balance'
                  onChange={this.handleInputBallance}
                  fluid
                  value={this.state.balance}
                  placeholder='Wallet Ballance' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Paypal Account
              </span>
              <span className="ue-info">
                <Input
                  name='paypalAccount'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.paypalAccount}
                  placeholder='Paypal Account' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Venmo Account
              </span>
              <span className="ue-info">
                <Input
                  name='venmoAccount'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.venmoAccount}
                  placeholder='Venmo Account' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Request Status
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Request Status"
                  onChange={this.handleRequestStatusChange}
                  selection
                  value={this.state.requestStatus}
                  options={this.walletStatusOptions()} />
              </span>
            </div>
          </div>

          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Street
              </span>
              <span className="ue-info">
                <Input
                  name='street'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.street}
                  placeholder='Street' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                City
              </span>
              <span className="ue-info">
                <Input
                  name='city'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.city}
                  placeholder='City' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                State
              </span>
              <span className="ue-info">
                <Input
                  name='state'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.state}
                  placeholder='State' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Zipcode
              </span>
              <span className="ue-info">
                <Input
                  name='zipCode'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.zipCode}
                  placeholder='ZipCode' />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Rep's email
              </span>
              <span className="ue-info">
                <Input
                  name='referredBy'
                  onChange={this.handleInputChange}
                  fluid
                  value={this.state.referredBy}
                  placeholder="Rep's email" />
              </span>
            </div>
          </div>
          <div className="ue-body">
            <div className="ue-item">
              <span className="ue-label">
                Role
              </span>
              <span className="ue-info">
                <Dropdown
                  placeholder="Select Role"
                  onChange={this.handleRoleChange}
                  selection
                  value={this.state.role}
                  options={this.roleOptions()} />
              </span>
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.props.toggleModal} negative content="Cancel" />
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Save'
            onClick={() => this.updateItem()}/>
        </Modal.Actions>
      </Modal>
    )
  }
}

UserEdit.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
}

UserEdit.defaultProps = {
  item: {}
}

export default UserEdit
