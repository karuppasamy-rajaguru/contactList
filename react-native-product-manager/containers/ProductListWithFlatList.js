import React, { Component } from "react";
import ProductListItem from "../components/ProductListItem";
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
import { SERVICE_URL } from "../utils/utils";
class ProductListWithFlatList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getProducts(this.props.page, this.props.limit);
  }

  onWishTapped = (id, index) => {
    if( this.props.icon == 'ios-trash'){
      Alert.alert(
        'Delete',
        'Are you sure you want to delete this product',
        [
          {text: 'No', onPress: () => console.log('')},
          {text: 'Yes', onPress: () => this.deleteProduct(id)},
        ],
          { cancelable: false }
        ) 
    } else{
      this.props.actions.addProductToWish(index);
    }
  };

  deleteProduct = (id)=>{
    this.props.actions.deleteProduct(id);
  }

  _getProducts = (page = 1, limit = 8) => {
    this.props.actions.getProducts(page, limit);
  };

  /*  flat list supporting methods */

  _getMore = () => {
    if(this.props.type == 'search'){
      this.props.actions.searchProduct(this.props.search, ++this.props.page, this.props.limit);
    } else {
      this._getProducts(++this.props.page, this.props.limit);
    }
  };

  _renderItem = ({ index, item }) => {
    return (
      <ProductListItem
        {...this.props}
        id={item.id}
        index={index}
        title={`${item.id} - ${item.title}`}
        image={item.image ? `${SERVICE_URL}/images/${item.image}` : null}
        rating={item.rating}
        price={item.price}
        wish={item.wish || false}
        onWishTapped={this.onWishTapped}
        icon={this.props.icon}
      />
    );
  };

  _keyExtractor = (item, index) => {
    return `${index}`;
  };

  _onRefresh = () => {
    //this.setState({ isRefreshing: true });
    this._getProducts();
  };

  _renderRefreshControl() {
    return (
      <RefreshControl
        onRefresh={this._onRefresh}
        refreshing={this.props.isRefreshing}
        tintColor={"#00ff80"}
        title={"Refreshing..."}
        titleColor={"#00ff80"}
      />
    );
  }

  /*  flat list supporting methods - END */

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        {this.props.isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
          <FlatList
            data={(this.props.type == 'search' ? this.props.searchProducts :  this.props.products )}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            onEndReachedThreshold={0.5}
            onEndReached={this._getMore}
            refreshControl={this._renderRefreshControl()}
          />
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.productState.products,
    isLoading: state.productState.isLoading,
    isRefreshing: state.productState.isRefreshing,
    page: state.productState.page,
    limit: state.productState.limit,
    searchProducts: state.productState.searchProducts,
    search: state.productState.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductListWithFlatList
);
