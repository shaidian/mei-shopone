<template>
    <div 
        :class="className">
        <div class="single-product-box">
            <div class="product-image">
                <nuxt-link :to="`/products-details/${product.id}`">
                    <img :src="product.image" :alt="product.name">
                    <img :src="product.imageHover" :alt="product.name">
                </nuxt-link>

                <ul>
                    <li>
                        <a 
                            href="javascript:void(0)" 
                            title="快速查看"
                            v-b-tooltip.hover
                        >
                            <i class="far fa-eye"></i>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="javascript:void(0);"
                            title="添加心愿单"
                            v-b-tooltip.hover
                        >
                            <i class="far fa-heart"></i>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="javascript:void(0);"
                            title="添加对比"
                            v-b-tooltip.hover
                        >
                            <i class="fas fa-sync"></i>
                        </a>
                    </li>
                </ul>
                
                <Timer v-if="product.timePeriod" v-bind:dateTime="product.dateTime"></Timer>
            </div>

            <div class="product-content">
                <h3>
                    <nuxt-link :to="`/products-details/${product.id}`">{{product.name}}</nuxt-link>
                </h3>

                <div class="product-price">
                    <span 
                        class="old-price"
                        v-if="product.offer"
                    >
                        ￥{{product.price}}
                    </span>
                    <span class="new-price">￥{{product.price - product.offerPrice > 0 ? product.price - product.offerPrice : product.price }}</span>
                </div>

                <div class="rating">
                    <i v-for="(item,index) in product.rating" class="fas fa-star"></i>
                </div>

                <a 
                    v-if="getExistPId === product.id"
                    href="javascript:void(0)" 
                    class="btn btn-light added-btn">
                    已经添加过
                </a>

                <a 
                    v-else
                    href="javascript:void(0)" 
                    class="btn btn-light">
                    添加购物车
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Timer from './Timer';
export default {
    name: 'ProductItem',
    components: {
        Timer
    },
    data(){
        return {
            getExistPId: null
        }
    },
    props: ['product', 'className'],
    computed: {

    },
    methods: {
        
    }
}
</script>