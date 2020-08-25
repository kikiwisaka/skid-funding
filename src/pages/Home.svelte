<script>
	import DonationList from '../components/CharityList.svelte';
	import Header from '../components/Header.svelte';
	import Welcome from '../components/Welcome.svelte';
	import Promo from '../components/Promo.svelte';
	import Footer from '../components/Footer.svelte';
    import {charities} from '../data/charities.js';
</script>

<Header />
<Welcome />
<DonationList {charities}/>
<Promo />
<Footer />