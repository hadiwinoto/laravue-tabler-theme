<template>
    <div class="page-wrapper">
      <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row align-items-center">
              <div class="col">
                <!-- Page pre-title -->

                <h2 class="page-title">
                  Proyek
                </h2>
              </div>
              <!-- Page title actions -->
            </div>
          </div>
        </div>
      <div class="page-body">
              <div class="container-lg mb-4">
                <div class="card">
                      <div class="card-header">
                        <h3 class="card-title">
                          PT. PLN (persero)
                        </h3>
                        <div class="card-actions">
                          <a href="/proyek/detail/1">
                            Detail
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path><line x1="16" y1="5" x2="19" y2="8"></line></svg>
                          </a>
                        </div>
                      </div>
                      <div class="card-body">
                        <dl class="row">
                          <dt class="col-5">Tanggal Penilaian</dt>
                          <dd class="col-7">20 Maret 2022</dd>
                          <dt class="col-5">Objek</dt>
                          <dd class="col-7">PLTD (Pembangkit Listrik Tenaga Diesel)</dd>
                          <dt class="col-5">Location:</dt>
                          <dd class="col-7">PLTD Teluk Lembu (Pekan Baru)</dd>
                          <dt class="col-5">IP Address:</dt>
                          <dd class="col-7">46.113.11.3</dd>
                        </dl>
                      </div>
                    </div>
               </div>

               <div class="container-lg">
                <div class="card">
                      <div class="card-header">
                        <h3 class="card-title">
                          PT. PLN (persero)
                        </h3>
                        <div class="card-actions">
                          <a href="/proyek/detail/1">
                            Detail
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path><line x1="16" y1="5" x2="19" y2="8"></line></svg>
                          </a>
                        </div>
                      </div>
                      <div class="card-body">
                        <dl class="row">
                          <dt class="col-5">Tanggal Penilaian</dt>
                          <dd class="col-7">20 Maret 2022</dd>
                          <dt class="col-5">Objek</dt>
                          <dd class="col-7">PLTD (Pembangkit Listrik Tenaga Diesel)</dd>
                          <dt class="col-5">Location:</dt>
                          <dd class="col-7">PLTD Teluk Lembu (Pekan Baru)</dd>
                          <dt class="col-5">IP Address:</dt>
                          <dd class="col-7">46.113.11.3</dd>
                        </dl>
                      </div>
                    </div>
               </div>
      </div>
       
    </div>
    
</template>
<script>
     export default {
         components :{
         },
        props: {
            paramkategori:'',
        },
        data() {
            return {
                id:'',
                jenis:'',
                isLoadingContentsubmit:false,
                isLoadingContent:false,
                tiket: {},
                subsektordata:{
                isLoadingContent: true,

                },
                meta:{
                    current_page:0,
                    per_page:0,
                    total:''
                },
                filter:{
                    q:null,
                    jenisdata:null
                },
                 submitdata:{
                    jenis_data:'',
                },
                 optionsjenisdata: [
                   
                ],
                 filter:{
                    q:null,
                    tipe:null
                   
                },
            }
        },
        created() {
            this.getResults();
        },
        methods: {
            onSubmit(){
                this.isLoadingContentsubmit = true;
                this.$http.post('/database/industri/tambahdatasektor',this.submitdata)
                    .then(response => {
                        this.isLoadingContentsubmit = false;
                        window.location.href = "/database/industri/sektor/anekaindustri/"+this.jenis+"/edit/"+response.data.id
                    });
                },
            getResults(page = 1) {
                this.isLoadingContent = true;
                this.$http.get('/tiket/data?page=' + page,{
                    params:{
                       
                    }
                })
                    .then(response => {
                        this.meta.current_page = response.data.data.current_page;
                        this.meta.per_page = response.data.data.per_page;
                        this.meta.total = response.data.data.total;
                        this.tiket = response.data.data;
                        this.isLoadingContent = false
                    });
            },
            formatnumberindo(num){
                if( typeof num === 'undefined' || num === null ){
                    // Do stuff
                }else{
                    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                }
            },
            findObjectByKey(array, key, value) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][key] === value) {
                        return array[i];
                    }
                }
                return null;
            }
        }
    }
</script>