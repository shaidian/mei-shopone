<template>
    <!-- Start Offer Area -->
    <section class="offer-area ptb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6" style="margin-bottom:20px;" v-for="(item,index) in categorieslist" :key="index">
                    <div class="offer-box">

                        <img v-if="item.cat_name.indexOf('家电')!=-1" src="../../assets/img/cate/dian.jpg" alt="家电">
                        <img v-if="item.cat_name.indexOf('热门')!=-1" src="../../assets/img/cate/chu.jpg" alt="热门">
                        <img v-if="item.cat_name.indexOf('海外')!=-1" src="../../assets/img/cate/haiwai.jpg" alt="海外">
                        <img v-if="item.cat_name.indexOf('房产')!=-1" src="../../assets/img/cate/fangchan.jpg" alt="房产">
                        <img v-if="item.cat_name.indexOf('相机')!=-1" src="../../assets/img/cate/xiangji.jpg" alt="相机">
                        <img v-if="item.cat_name.indexOf('电脑')!=-1" src="../../assets/img/cate/com.jpg" alt="电脑">

                        <div class="category">
                            <h4>{{item.cat_name}}</h4>
                        </div>

                        <div class="box-inner">
                            <div class="inner-content">
                                <h3>{{item.cat_name}}</h3>

                                <ul>
                                    <li v-for="(citem,cindex) in item.children" :key="cindex">
                                        <nuxt-link to="/products" >
                                            {{citem.cat_name}}
                                        </nuxt-link>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-4 col-md-6">
                    <div class="offer-box">
                        <img src="../../assets/img/offer-women.jpg" alt="image">

                        <div class="category">
                            <h4>Women's</h4>
                        </div>

                        <div class="box-inner">
                            <div class="inner-content">
                                <h3>Women's</h3>

                                <ul>
                                    <li><a href="#">Woman Accessories</a></li>
                                    <li><a href="#">Man Accessories</a></li>
                                    <li><a href="#">Sunglasses</a></li>
                                    <li><a href="#">Belts</a></li>
                                    <li><a href="#">Hats</a></li>
                                    <li><a href="#">Scrafs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="offer-box">
                        <img src="../../assets/img/1.jpg" alt="image">

                        <div class="category">
                            <h4>Accessories</h4>
                        </div>

                        <div class="box-inner">
                            <div class="inner-content">
                                <h3>Accessories</h3>

                                <ul>
                                    <li><a href="#">Woman Accessories</a></li>
                                    <li><a href="#">Man Accessories</a></li>
                                    <li><a href="#">Sunglasses</a></li>
                                    <li><a href="#">Belts</a></li>
                                    <li><a href="#">Hats</a></li>
                                    <li><a href="#">Scrafs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="offer-box">
                        <img src="../../assets/img/offer-men.jpg" alt="image">

                        <div class="category">
                            <h4>Men's</h4>
                        </div>

                        <div class="box-inner">
                            <div class="inner-content">
                                <h3>Men's</h3>

                                <ul>
                                    <li><a href="#">Woman Accessories</a></li>
                                    <li><a href="#">Man Accessories</a></li>
                                    <li><a href="#">Sunglasses</a></li>
                                    <li><a href="#">Belts</a></li>
                                    <li><a href="#">Hats</a></li>
                                    <li><a href="#">Scrafs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
    <!-- End Offer Area -->
</template>
<script>
export default {
    
    computed: {
        categorieslist(){
            return this.$store.state.categories.categorieslist
        }
    },
    data(){
        return {
            imgs:[
                {path:"../../assets/img/cate.jpg"},
            ]
        }
    },
}
</script>