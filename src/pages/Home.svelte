<script>
	import { onDestroy } from 'svelte';
	import DonationList from '../components/CharityList.svelte';
	import Header from '../components/Header.svelte';
	import Welcome from '../components/Welcome.svelte';
	import Promo from '../components/Promo.svelte';
	import Footer from '../components/Footer.svelte';

	onDestroy(() => { window.scrollTo(0,0) });
</script>

<Header />
<Welcome />
<DonationList/>
<Promo />
<Footer />