import React, { Component } from 'react'
import { Table, Pagination, Menu, Button, Icon } from 'semantic-ui-react'

import './style/UsersContent.css'

class UsersContent extends Component {
  state = {
    activePage: 5,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 50
  }
  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })
  render () {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages
    } = this.state
    return (
      <div className="uc-wrapper">
        <div className="uc-table">
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Telephone</Table.HeaderCell>
                <Table.HeaderCell>Club</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>202-555-0143</Table.Cell>
                <Table.Cell>None</Table.Cell>
                <Table.Cell>
                  <div className="uc-actions">
                    <Button icon>
                      <Icon name='pencil' />
                    </Button>
                    <Button icon>
                      <Icon name='eye' />
                    </Button>
                    <Button icon>
                      <Icon name='trash' />
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>202-555-0143</Table.Cell>
                <Table.Cell>None</Table.Cell>
                <Table.Cell className="uc-actions">
                  <Button icon>
                    <Icon name='pencil' />
                  </Button>
                  <Button icon>
                    <Icon name='eye' />
                  </Button>
                  <Button icon>
                    <Icon name='trash' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='5'>
                  <Menu floated='right' pagination>
                    <Pagination
                      className="uc-pagination"
                      activePage={activePage}
                      boundaryRange={boundaryRange}
                      onPageChange={this.handlePaginationChange}
                      size='mini'
                      siblingRange={siblingRange}
                      totalPages={totalPages}
                      // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                      ellipsisItem={showEllipsis ? undefined : null}
                      firstItem={showFirstAndLastNav ? undefined : null}
                      lastItem={showFirstAndLastNav ? undefined : null}
                      prevItem={showPreviousAndNextNav ? undefined : null}
                      nextItem={showPreviousAndNextNav ? undefined : null}
                    />
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </div>
    )
  }
}

export default UsersContent