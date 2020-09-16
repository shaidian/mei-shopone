<template>
    <!-- Start Top Header Area -->
    <div class="top-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6">
                    <ul class="top-header-nav">
                        <li><nuxt-link to="/login">登录</nuxt-link></li>
                        <li><nuxt-link to="/signup">注册</nuxt-link></li>
                        <li><nuxt-link to="/products">所有产品页</nuxt-link></li>
                        <li><nuxt-link to="/contact">联系我们</nuxt-link></li>
                    </ul>
                </div>

                <div class="col-lg-5 col-md-6">
                    <ul class="top-header-right-nav">
                        <li><nuxt-link to="/blog-one">博文</nuxt-link></li>
                        <li><nuxt-link to="/cart">购物车</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Top Header Area -->
</template>