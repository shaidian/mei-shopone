<template>
  <div>
    <Banner></Banner>
    <Offer></Offer>
    <Products912></Products912>
    <ProductCategory></ProductCategory>
    <Facility></Facility>
    <Subscribe></Subscribe>
    <Partner></Partner>
  </div>
</template>

<script>
import Banner from '../components/landing-one/Banner';
import Offer from '../components/landing-one/Offer';
import Products912 from '../components/landing-one/Products912';
import ProductCategory from '../components/landing-one/ProductCategory';
import Facility from '../components/landing-one/Facility';
import Subscribe from '../components/common/Subscribe';
import Partner from '../components/common/Partner';

export default {
  components: {
    Banner, Offer, Products912, ProductCategory, Facility , Subscribe, Partner
  },
  mounted(){

  }
  
}
</script>