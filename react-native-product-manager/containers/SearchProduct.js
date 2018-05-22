import React, { Component } from "react";
import ProductListWithFlatList from "./ProductListWithFlatList";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Alert,
  View
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../actionCreators/product";
import { SearchBar } from 'react-native-elements'

class SearchProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.actions.getProducts(this.props.page, this.props.limit);
    this.props.actions.emptyProducts();
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
          <SearchBar
            lightTheme
            onChangeText={(text)=> this.props.actions.searchProduct(text, page=1, limit=8)}
            onClear={()=>console.log('test')}
            placeholder='Type Here...' />
            <ProductListWithFlatList type='search'/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productState.products,
    isLoading: state.productState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  SearchProduct
);
