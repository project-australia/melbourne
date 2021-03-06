import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllOrders, updateOrder, findOrderById, searchOrders, confirmSellOrder } from './../../../services/backend/orderService'
import { findBooksById } from './../../../services/backend/bookService'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import CommonHeader from './../components/CommonHeader'
import OrdersFilter from './../components/OrdersFilter'
import OrdersContent from '../components/OrdersContent'

class Orders extends Component {
  state = {
    itemList: {
      orders: [],
      totalPages: 0,
      activePage: 0
    }
  }

  componentDidMount () {
    this.getAllItems()
  }

  searchOrders = async searchParam => {
    if (searchParam) {
      const itemList = await searchOrders(searchParam)
      this.setState({ itemList })
    } else {
      this.getAllItems()
    }
  }

  getAllItems = async (activePage) => {
    const Orders = await getAllOrders(activePage)
    this.setState({ itemList: Orders })
  }

  updateItem = async item => {
    await updateOrder(item)
    this.getAllItems()
  }

  confirmOrder = (idUser, idOrder, books) => {
    confirmSellOrder(idUser, idOrder, books)
    this.getAllItems()
  }

  render () {
    const { itemList } = this.state
    return (
      <SectionCentered>
        <CommonHeader
          iconName="file text outline"
          title="Orders"
        />
        <OrdersFilter
          searchFunction={this.searchOrders}
        />
        <OrdersContent
          listItems={itemList}
          updateItem={this.updateItem}
          viewItem={findOrderById}
          getBooksInOrder={findBooksById}
          confirmSellOrder={this.confirmOrder}
          changePage={this.getAllItems}
        />
      </SectionCentered>
    )
  }
}

Orders.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  }
}

export default connect(mapStateToProps)(Orders)
