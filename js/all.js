const wrap = new Vue({
    el: '#wrap',
    data: {
        bSubmit: false,
        vNowPage: {
            'home' : false,
            'explore' : true,
            'chatRoom' : false,
        }
    },
    methods:{
        showSubmit(){
            console.log(this.$refs.textInput.value);
            if(this.$refs.textInput.value){
                this.bSubmit = true;
            }else{
                this.bSubmit = false;
            }
        },
        exploreStage(){
            this.$refs.home.classList += ' hide';
            window.setTimeout(()=>{
                this.vNowPage.home = false;
            },3000)
            console.log(this.$refs.home.classList)
        }
    }
})