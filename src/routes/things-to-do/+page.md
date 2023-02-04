<script>
  import { pageTitle } from '~/utils/pageTitle'
</script>

<!-- HEAD -->
<svelte:head>
  <title>{pageTitle('Things to Do')}</title>
  <meta name="description" content="Some of our favorite things to do/see while you're in town." />
</svelte:head>

<!-- ![https://ity.sh/xv6](https://ity.sh/xv6.QR) -->

<section class="crop">
  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=19LaJVuDmwb43dzbbtuGFJCsqy2tQvQo&ehbc=2E312F">
    bar
  </iframe>
  <div class="loading">loading map...</div>
</section>

## Museums
If museums are your jam, head over to the Museum District and check out one or two of our nineteen incredible museums. Our favorite is the [Houston Museum of Natural Science](https://goo.gl/maps/XtrvgmVwA5iweKmb7). For the art lovers, check out the [Menil Collection](https://goo.gl/maps/sn6ZrUadGjuGGEqi6) or the [Museum of Fine Arts](https://goo.gl/maps/ioikkaxWv8hSUurAA).
 
## Parks
If you are willing to brave the heat and spend some time outdoors, check out Houston’s largest park, [Memorial Park](https://goo.gl/maps/vW6cdRy65ff3TvE89). If something a little smaller is more your speed, [Buffalo Bayou Park](https://goo.gl/maps/tAMd7WRZa4MLqwmq7) is absolutely beautiful.
 
Please bring sun protection and drink plenty of water!
 
## Restaurants
Houston has a fantastic food scene, and we had trouble narrowing this list down to only a few of our favorite spots. Hopefully you’ll have some time to check out one or two of them!
 
Our first recommendation has to be [El Tiempo Cantina](https://goo.gl/maps/VcGu5A1dKq3frJMz6) on Washington. This is where it all began – it’s the place we met, and the place we still visit (at least) once per week. Go for the mango margaritas, trust us!
 
If you want something other than Tex-Mex, we have you covered for pizza ([The Gypsy Poet](https://goo.gl/maps/afeTaZ9yZCqwkkSL8), [Bollo Woodfired Pizza](https://goo.gl/maps/Firt4jQxg76h7tfn8), or [Coltivare](https://goo.gl/maps/TDpzv4KXUvB1v9QG6)), BBQ ([Truth Barbeque](https://goo.gl/maps/YNp4LoRPeV35Zbgm8)), sushi ([KA Sushi](https://goo.gl/maps/5ijA6nkNXzkQXn6s6)), handrolls ([Handies Douzo](https://goo.gl/maps/cMZhq8nybgLH4P9a8)), seafood ([1751 Sea and Bar](https://goo.gl/maps/j1qkMYHYeTYTV57u6)), and American fare ([Grace’s](https://goo.gl/maps/p5EmWVdh8fojuyeF7)).
 
Good brunch spots include [Dish Society](https://goo.gl/maps/82QyjZsK26hcQRSi7), [Pondicheri](https://goo.gl/maps/FhGwpapBpTCsw97H7), and [A’Bouzy](https://goo.gl/maps/6x7aAVVhyE9myrscA), but these places are truly great any time of day!
 
If you want to stick around downtown for meals, check out [Hearsay](https://goo.gl/maps/HKpqRf3iBuunZFx8A), [Phoenicia](https://goo.gl/maps/f7g9SKJ3P3evVU8w8), [Bravery Chef Hall](https://goo.gl/maps/KZvoCZKyQmBd5EJv8), [Niko Niko’s](https://goo.gl/maps/zzCsKBx6Vy4gqjnv7), or [Potente](https://goo.gl/maps/4JcNCEiAzZuxYied9).
 
## Breweries
We only have about a million breweries around town. If you’re a lover of craft beer, here are some recommendations:

- [Karbach Brewing Co.](https://goo.gl/maps/3aJ6KQTCEbximEjB7)
- [Saint Arnold Brwing Company](https://goo.gl/maps/Ve3K1e9Kruvgzd8X6)
- [8th Wonder Brewery](https://goo.gl/maps/Fkox1hvPWgzyiEPC6)
- [Holler Brewing Co.](https://goo.gl/maps/vgFHYeUnmRDmM6k5A)
 
## Downtown
If you want to hang out downtown, you have a lot of options! The Astros will be in Kansas City beating up on the Royals that weekend, but you can definitely snag a seat at [McIntyre’s Downtown](https://goo.gl/maps/bq6ruAjLQqVMENyVA) or [Biggio’s](https://goo.gl/maps/jJ1LLXp9Pv14HFiF7) to watch some Sportsball. If you’re not into sports, there’s always something going on at [Discovery Green](https://goo.gl/maps/nd9pY2729Jo1KBbW8), and the [Aquarium](https://goo.gl/maps/N6EtVdCcPGax5Dfq9) is quite nice (and indoors/out of the heat). While we have never done one, the Segway Tours apparently get fantastic reviews and take you by some of our really awesome street art. There are also bars all up and down Main Street – our favorites are Angel Share and Capt. Foxheart’s Bad News Bar and Spirit Lounge.

<style lang="scss">
  :root {
    --map-border: 2px solid var(--foreground-color);
  }
  .crop {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    border-top: var(--map-border);

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1rem;
      background-color: var(--background-color);
      border-top: var(--map-border);
    }
  }

  iframe {
    --crop-top: -4.5rem;
    width: 100%;
    height: 40rem;
    border: none;
    position: relative;
    top: var(--crop-top);
    margin-bottom: var(--crop-top);
    background-color: var(--foreground-5);
    border: var(--map-border);

    @media screen and (max-width: 600px) {
      height: auto;
      aspect-ratio: 1/1.3;
    }
  }

  .loading {
    position: absolute;
    opacity: 0.4;
    z-index: -1;
  }
</style>
