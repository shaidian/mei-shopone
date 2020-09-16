<template>
    <div>
        <section class="all-products-area pb-60">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span> 潮流女装</h2>
                </div>

                <div class="row">
                    
                    <ProductItem
                        v-for="(product, index) in products"
                        :product="product"
                        :key="index"
                        :className="`col-lg-3 col-md-6 col-sm-6`"
                    ></ProductItem>
                    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ProductItem from './ProductItem';
export default {
    components: {
        ProductItem
    },
    data(){
        return {
            
        }
    },
    methods: {
       
    },
    computed: {
        products(){
            return this.$store.state.products.productslist.filter(product => product.cattwoid === 912)
        }
        
    },
    async mounted() {
    },
}
</script>