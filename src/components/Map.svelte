<script>
    import { onMount } from "svelte";
    import { mapOptions } from "../config.js";
    let container, map;
    onMount(function () {
        map = new google.maps.Map(container, mapOptions);
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(-6.20, 106.84),
            map,
            title: "Snazzy!",
        });
    });
</script>

<div class="xs-maps-wraper map-wraper-v2">
    <div id="xs-map" class="xs-box-shadow-2" bind:this={container} />
</div>