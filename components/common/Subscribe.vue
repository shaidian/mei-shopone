<template>
    <!-- Start Subscribe Area -->
    <section class="subscribe-area ptb-60">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="newsletter-content">
                        <h3>请您先了解</h3>
                        <p>订阅我们的时事通讯，切勿错过晒点商城的任何内容。</p>
                    </div>
                </div>

                <div class="col-lg-6">
                    <form class="newsletter-form" v-on:submit.prevent>
                        <input type="email" class="form-control" placeholder="填写您的邮箱" id="email" v-model="subscriptions.email" autocomplete="off">
                        <button @click="subscribe" type="submit">订阅!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End Subscribe Area -->
</template>
<script>
export default {
    data(){
        return{
            subscriptions: {
                email: '',
                createdAt: new Date()
            }
        }
    },
    methods: {
        subscribe(){
            if(this.subscriptions.email != '' && this.validateEmail(this.subscriptions.email)){

                this.$toast.success(`订阅成功`, {
                    icon: 'fas fa-user-check'
                });
                this.subscriptions.email = ''
            } else {
                this.$toast.error(`请检查您的邮箱`, {
                    icon: 'fas fa-times'
                });
            }
        },
        validateEmail(email) 
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>