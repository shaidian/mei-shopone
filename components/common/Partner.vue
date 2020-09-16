<template>
    <client-only>
        <!-- Start Partner Area -->
        <div class="partner-area">
                <div class="partner-slides owl-carousel owl-theme">
                    <carousel
                        :loop = true
                        :autoplay = true
                        :autoplayTimeout = 1000
                        :paginationEnabled = false
                        :perPageCustom = "[[0, 2], [768, 4], [1200, 6]]"
                        :speed = 9000
                    >
                        <slide v-for="i in 17" :key="i">
                            <div class="partner-item">
                                <a href="javascript:void(0);" target="_blank">
                                    <img :src="require('../../assets/img/partner/'+i+'.png')" alt="image" />
                                </a>
                            </div>
                        </slide>
                    </carousel>

            </div>
        </div>
        <!-- End Partner Area -->
    </client-only>
</template>