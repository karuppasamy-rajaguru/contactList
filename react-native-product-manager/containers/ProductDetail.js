import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../actionCreators/product";
import { SERVICE_URL } from "../utils/utils";

class ProductDetail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Product Detail for ${navigation.state.params.id}`
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { id } = this.props.navigation.state.params;
    this.props.actions.getSingPleroduct(id);
  }

  renderProduct() {
    const { navigation } = this.props;
    const  product  = this.props.product;
    return (<View>
      <Image
        source={product.image ? { uri: `${SERVICE_URL}/images/${product.image}` } : require("../assets/barcode.png")}
        style={{ height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.id} - {product.title}</Text>
      <Text style={[styles.title, { fontSize: 16 }]}>
        {product.additionalInfo && `(${product.additionalInfo})`}
      </Text>
    </View>)
  }

  render() {

    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
            this.renderProduct()
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    padding: 10
  },
  title: {
    fontSize: 24,
    padding: 10
  }
});
function mapStateToProps(state) {
  return {
    product: state.productState.product,
    isLoading: state.productState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductDetail
);