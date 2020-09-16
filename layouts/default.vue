<template>
  <div>
    <TopPanel v-if="isShowing" @clicked="onTopPanelClose"></TopPanel>
    <TopHeader></TopHeader>
    <nuxt />
    <Footer></Footer>
    <SiteLoader  v-if="loading" />
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SiteLoader from './SiteLoder';
export default {
  components: {
    TopPanel, TopHeader , Footer, BackToTop, SiteLoader
  },
  data() {
    return {
      loading: true,
      isShowing: true
    }
  },
  methods: {
    onTopPanelClose (value) {
      this.isShowing = value;
    }
  },
  watch: {
    '$route' (pathUrl){
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 600);
    }
  },
  mounted(){
    setTimeout(() => { this.loading = false; }, 600);
  }
}
</script>