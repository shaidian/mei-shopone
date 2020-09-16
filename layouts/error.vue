<template>
    <div>
        <section class="error-area ptb-60">
            <div class="container">
                <div class="error-content">
                    <img src="../assets/img/404.png" alt="error">

                    <h3>我真giao了</h3>
                    <p>页面居然找不到</p>

                    <nuxt-link to="/" class="btn btn-light">返回首页</nuxt-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error-layout'
}
</script>