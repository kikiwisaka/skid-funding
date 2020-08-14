<script>
    import DonationList from '../components/DonationList.svelte';
    import {charities} from '../data/charities.js';

	let title = "Solidaritas Keluarga Indonesia";
	setTimeout(function() {
		title = "Sharing is caring";
	}, 2000);
</script>

<style>
	h1 {
		font-size: 3em;
		color: blueviolet;
	}
</style>

<div>
	<h1>{title}</h1>
	<DonationList {charities}/>
</div>