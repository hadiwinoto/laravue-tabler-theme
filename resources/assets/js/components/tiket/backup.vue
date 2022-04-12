<template>
   <div class="page-wrapper">
     <div class="page-body">
      <div class="container-xl">
         <div class="row row-cards">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row align-items-center">
              <div class="col">
                <!-- Page pre-title -->

                <h2 class="page-title">
                  Inspeksi
                </h2>
              </div>
              <!-- Page title actions -->
            </div>
          </div>
        </div>
        <div class="container-xl">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Project ID</h3>
                  <p class="card-subtitle">Used when interacting with the API.</p>
                  <div class="input-icon">
                    <input type="text" value="prj_5ae74426fe935327a8fa178b07d84ad9" class="form-control" placeholder="Search…" readonly="">
                    <span class="input-icon-addon">
                      <!-- Download SVG icon from http://tabler-icons.io/i/files -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 3v4a1 1 0 0 0 1 1h4"></path><path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path><path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path></svg>
                    </span>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row align-items-center">
                    <div class="col">Learn more about <a href="#">Project ID</a></div>
                    <div class="col-auto">
                      <a href="#" class="btn btn-primary">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Project ID</h3>
                  <p class="card-subtitle">Used when interacting with the API.</p>
                  <div class="input-icon">
                    <input type="text" value="prj_5ae74426fe935327a8fa178b07d84ad9" class="form-control" placeholder="Search…" readonly="">
                    <span class="input-icon-addon">
                      <!-- Download SVG icon from http://tabler-icons.io/i/files -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 3v4a1 1 0 0 0 1 1h4"></path><path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path><path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path></svg>
                    </span>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row align-items-center">
                    <div class="col">Learn more about <a href="#">Project ID</a></div>
                    <div class="col-auto">
                      <a href="#" class="btn btn-primary">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                <SideMenu></SideMenu>

              <div class="col-lg-9">
                <div class="card card-lg">
                  <div class="card-body">
                    <div class="markdown">
                          <h1 class="m-0">Informasi Umum</h1>
                      <div class="mt-2">
                        
                        <div class="row">
                          <div class="col-md-6 col-xl-12">
                            
                            <div class="mb-3">
                              <label class="form-label">Tanggal Inspeksi (Mulai)</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Tanggal Inspeksi (Selesai)</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Tanggal Penilaian</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Nama Pembangkit</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Negara Pembuat</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>


                            <div class="mb-3">
                              <label class="form-label">Kontraktor Pelaksana</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Tahun di Bangun</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Tahun Operasi</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                             <label class="form-label">Total Kapasitas</label>
                              <div class="input-group mb-2">
                                <input type="text" class="form-control">
                                <button class="btn" type="button">kW</button>
                              </div>
                            
                            </div>


                            <div class="mb-3">
                             <label class="form-label">Daya Mampu Netto</label>
                              <div class="input-group mb-2">
                                <input type="text" class="form-control">
                                <button class="btn" type="button">kW</button>
                              </div>
                            
                            </div>


                            <div class="mb-3">
                              <label class="form-label">Nama PIC</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">No. PIC</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Email PIC</label>
                              <input type="text" class="form-control" name="example-text-input">
                            </div>

                            <div class="mb-3">
                              <button type="submit" class="btn btn-primary ms-auto">Submit</button>
                            </div>
                            
                           
                            
                        </div>
                        
                       
                        </div>







                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
   </div>
   
      
       
</template>
<script>
import SideMenu from  "./SideMenu.vue"
export default {
  components:{
    SideMenu
  }
}
</script>

<style>

</style>