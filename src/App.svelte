<script>
  import Map from "./components/Map/Map.svelte";
  import Navbar from "./components/UI/Navbar/Navbar.svelte";

  export let ready;
</script>

<Navbar/>
{#if ready}
  <Map/>
{/if}
