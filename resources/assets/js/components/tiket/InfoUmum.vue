<template>
   <div class="page-wrapper">
        <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
              <div class="col">
                <h2 class="page-title">
                  Inspeksi
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="container-xl">
            <div class="row row-cards">
              
          
            <div class="col-md-3">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Menu</h3>
                </div>
                <div class="card-body">
                  <SideMenu></SideMenu>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Informasi Umum</h3>
                </div>
                <div class="card-body">
                  <form>
                    <div class="col-lg-12">
                        <div class="row">
                          <div class="col-md-3 col-xl-12">
                            
                            <div class="mb-3">
                              <label class="form-label">Tanggal Inspeksi (Mulai)</label>
                               <datepicker  :bootstrap-styling="true" :language="languages['id']" format="d MMMM yyyy" />
                              <!-- <input type="text" class="form-control" name="example-text-input"> -->
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Tanggal Inspeksi (Selesai)</label>
                              <datepicker  :bootstrap-styling="true" :language="languages['id']" format="d MMMM yyyy" />
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Tanggal Penilaian</label>
                              <datepicker  :bootstrap-styling="true" :language="languages['id']" format="d MMMM yyyy" />
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Nama Pembangkit</label>
                              <input type="text" class="form-control">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Negara Pembuat</label>
                              <input type="text" class="form-control">
                            </div>


                            <div class="mb-3">
                              <label class="form-label">Kontraktor Pelaksana</label>
                              <input type="text" class="form-control" >
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Tahun di Bangun</label>
                              <input type="text" class="form-control">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Tahun Operasi</label>
                              <input type="text" class="form-control">
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
                              <input type="text" class="form-control">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">No. PIC</label>
                              <input type="text" class="form-control">
                            </div>

                            <div class="mb-3">
                              <label class="form-label">Email PIC</label>
                              <input type="text" class="form-control">
                            </div>

                            <div class="mb-3">
                              <button type="submit" class="btn btn-primary ms-auto">Submit</button>
                            </div>
                            
                           
                            
                        </div>
                        
                       
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer footer-transparent d-print-none">
        <div class="container-xl">
          <div class="row text-center align-items-center flex-row-reverse">
            <div class="col-lg-auto ms-lg-auto">
              <ul class="list-inline list-inline-dots mb-0">
                <li class="list-inline-item"><a href="./docs/index.html" class="link-secondary">Documentation</a></li>
                <li class="list-inline-item"><a href="./license.html" class="link-secondary">License</a></li>
                <li class="list-inline-item"><a href="https://github.com/tabler/tabler" target="_blank" class="link-secondary" rel="noopener">Source code</a></li>
                <li class="list-inline-item">
                  <a href="https://github.com/sponsors/codecalm" target="_blank" class="link-secondary" rel="noopener">
                    <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink icon-filled icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>
                    Sponsor
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
              <ul class="list-inline list-inline-dots mb-0">
                <li class="list-inline-item">
                  Copyright © 2022
                  <a href="." class="link-secondary">Tabler</a>.
                  All rights reserved.
                </li>
                <li class="list-inline-item">
                  Generated 2022-04-11 07:12 UTC
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>   
</template>
<script>
import { id } from "vuejs-datepicker/dist/locale";
import * as lang from "vuejs-datepicker/src/locale";
import Datepicker from "vuejs-datepicker";
import SideMenu from  "./SideMenu.vue"
export default {
  components:{
    SideMenu,
    Datepicker
  },
  data(){
    return{
      isLoadingContent: false,
      buttonloading:'',
      buttondisabled:false,
      infoumum:{


      },
      languages: lang,

    }
  }
}
</script>

<style>

</style>