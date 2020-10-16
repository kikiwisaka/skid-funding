<script>
  import { fade, fly, slide } from "svelte/transition";
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
  import { charities } from "../stores/data.js";
  import Modal from "./Modal.svelte";
  import Loader from "./Loader.svelte";

  let isModalOpen = false;

  function calculateFund(pledged, target) {
    return Math.round((1 / (target / pledged)) * 100);
  }
  function formatCurrency(nominal) {
    return nominal.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
  function calculateDaysRemaining(date_end) {
    const delta = date_end - new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(delta / oneDay));
  }
  function handleButton() {
    isModalOpen = true;
  }
  function handleCloseModal() {
    isModalOpen = false;
  }
</script>

<style>
  .xs-list-with-content {
    font-size: 12px;
  }
  .show {
    display: block;
    background-color: rgba(0, 0, 0, 0.45);
  }
  .pledged {
    margin-right: 2em;
  }
</style>

<section id="popularcause" class="bg-gray waypoint-tigger xs-section-padding">
  <div class="container">
    <div class="xs-heading row xs-mb-60">
      <div class="col-md-9 col-xl-9">
        <h2 class="xs-title">Popular Causes</h2>
        <span class="xs-separetor dashed" />
        <p>
          FundPress has built a platform focused on aiding entrepreneurs,
          startups, and
          <br />
          companies raise capital from anyone.
        </p>
      </div>
      <!-- .xs-heading-title END -->
    </div>
    <!-- .row end -->
    <div class="row">
      {#each $charities as charity}
        <div class="col-lg-4 col-md-6" transition:fade>
          <div class="xs-popular-item xs-box-shadow">
            <div class="xs-item-header">
              <img src={charity.thumbnail} alt="" />
              <div class="xs-skill-bar">
                <div class="xs-skill-track">
                  <!-- <p in:fly={{ delay: 2000, x: -100 }} style="left: 100%">
                      <span
                        class="number-percentage-count number-percentage"
                        data-value="90"
                        data-animation-duration="3500">{calculateFund(charity.pledged, charity.target)}</span>%
                    </p> -->
                </div>
              </div>
            </div>
            <!-- .xs-item-header END -->
            <div class="xs-item-content">
              <ul class="xs-simple-tag xs-mb-20">
                <li><a href="">{charity.charity}</a></li>
              </ul>

              <a href="#" class="xs-post-title xs-mb-30">{charity.job_title}</a>

              <ul class="xs-list-with-content">
                <li class="pledged">
                  <!-- {formatCurrency(charity.amount)}<span>Saldo</span> -->
                  {charity.balance}<span>Saldo</span>
                </li>
                <!-- <li>
                    <span
                      class="number-percentage-count number-percentage"
                      data-value="90"
                      data-animation-duration="3500">{calculateFund(charity.pledged, charity.target)}</span>%
                    <span>Funded</span>
                  </li> -->
                <!-- <li>
                    {calculateDaysRemaining(charity.date_end)}<span>Days to go</span>
                  </li> -->
              </ul>

              <span class="xs-separetor" />

              <div class="row xs-margin-0">
                <div class="xs-round-avatar">
                  <!-- <img src={charity.profile_photo} alt="" /> -->
                </div>
                <div class="xs-avatar-title">
                  <a href="#"><span>Provinsi</span>{charity.province}</a>
                </div>
              </div>

              <span class="xs-separetor" />

              <a
                href="/donation/{charity._id}"
                data-toggle="modal"
                data-target="#exampleModal"
                class="btn btn-primary btn-block">
                Donate This Cause
              </a>
            </div>
            <!-- .xs-item-content END -->
          </div>
          <!-- .xs-popular-item END -->
        </div>
      {:else}
        <Loader />
      {/each}
    </div>
    <!-- .row end -->
  </div>
  <!-- .container end -->
</section>

<!-- <div>
    <h2>Charity list</h2>
    {#if charities !== undefined}
    <ul>
        {#each charities as charity }
            <li>{charity.title} - {charity.category}</li>
        {/each}
    </ul>
    {:else}
        <h5>Data tidak tersedia.</h5>
    {/if}
</div> -->
