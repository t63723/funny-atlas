<script>
  import {onMount} from "svelte";

  let myMap;

  onMount(async () => {

    myMap = new ymaps.Map(
            "yandex-map",
            {
              center: [53.355084, 83.769948],
              zoom: 13
            },
            {
              searchControlProvider: "yandex#search",
              balloonPanelMaxMapArea: Infinity
            }
    );
  });
</script>


<style>
  #yandex-map {
    width: auto;
    height: 600px;
  }
</style>


<div class="p-2">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="content" id="yandex-map"/>
      </div>
    </div>
  </div>
</div>
