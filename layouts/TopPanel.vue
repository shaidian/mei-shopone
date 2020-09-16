<template>
    <!-- Start Top Panel Area -->
    <client-only>
        <transition name="fade">
            <div class="top-panel">
                <div class="container">
                    <div class="panel-content">
                        <div class="top-panel-slides">
                            <carousel
                                :autoplay = true
                                :autoplayTimeout = 5000
                                :paginationEnabled = false
                                :perPageCustom = "[[0, 1], [768, 1], [1024, 1]]"
                                :loop = true
                            >
                                <slide v-for="item in items" :key="item.id">
                                    <div class="single-item-box">
                                        <p v-html="item.text"></p>
                                    </div>
                                </slide>
                            </carousel>
                        </div>

                        <i @click="emitToParent" class="fas fa-times panel-close-btn"></i>
                    </div>
                </div>
            </div>
        </transition>
    </client-only>
    <!-- End Top Panel Area -->
</template>

<script>
export default {
    data() {
        return {
            isShowing: true,
            items: [
                {
                    id: 1,
                    text: '<strong>晒点商城&nbsp;&nbsp;</strong> 一个有温度有版型的自选商城 <a href="https://www.shaidian.vip" target="_blank">&nbsp;&nbsp;&nbsp;去看看</a>'
                },
                {
                    id: 2,
                    text: '<strong>槑先森晒点工匠猪八戒店铺&nbsp;&nbsp;</strong><a href="https://shop.zbj.com/9259639/"  target="_blank">&nbsp;&nbsp;&nbsp;去看看</a>'
                },
                {
                    id: 3,
                    text: '<strong>99元自选商场&nbsp;&nbsp;</strong><a href="javascript:void(0);">&nbsp;&nbsp;&nbsp;去看看</a>'
                },
            ]
        }
    },
    methods: {
        emitToParent(){
            this.$emit('clicked', this.isShowing = !this.isShowing);
        }
    },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>