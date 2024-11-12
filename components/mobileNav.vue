<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-50">
    <div class="flex justify-around items-center py-2">
      <!-- Home -->
      <nuxt-link to="/" class="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
<path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
</svg>
        <span class="text-xs mt-1">Home</span>
      </nuxt-link>

      <!-- Case Brief -->
      <nuxt-link to="/subject" class="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
        <img class="w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAa0lEQVR4nO3VMQqAMAyF4f94HsvRc8aDPBF0EaVJqlCCDzIUkn5DhkDFTMAKqFFzFjDH5+pBzmFPj4Dla0BRJAMogmQBeZEeQG8BdxkX0MO71TcO4M24gP4d1FuyBQ6OLrXPuk5mBrFjtlg2kYCbs5LSzcYAAAAASUVORK5CYII=" alt="brief">
        <span class="text-xs mt-1">Case Brief</span>
      </nuxt-link>
      <!-- Du Case Mat -->
      <nuxt-link to="/case-material"
        class="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
        <img class="w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB30lEQVR4nO2au0oDQRSGv4AQLwE1WAiaJwgWIhZWXkpbS19AQdLZq51vobXW3goxYKGgoJ1gShttRBQFUUcWTmBZSDJnN8nOhP3gQJjMf5j/n7BhJoEM/8gDFeAK+ABMyhWLCeDOgcWbJEbyDpowcYxUHFi0aYeR614x8t4rRoyjpSbtBZvMSIR2JXgMnPi+I7/ANDAF/Phm5BRYAIaAsVC/4HUBWATOXDXyCdwAq0DOondO5t4CX64YqUZ0A8AO8AIMh8ZHgGdgS+aEqbpgZEnml4ENoBZ6bzLUrxQaf5S5gQbpkaqRaotUj8RMSZ5eWr3plpH6bmhTTaJXY7sbo1Laz3pcvRrbNLeltLsSV6+mWbNLmRM8lV6BN6AoYxcWi0miV2ObZn1Mk2oSvRrbNOvjtqkm1avRpKlJNaleTaNGwaVEK/o7qFfTqNGMhXa2g3o1jRrtWWj3O6hX06jRH7DWRLfe4qmTVK/GtKgDYF7OHQU5gxxa6JLq1RhHS03aCzaZkQhpJ2+yHYmQdvIm25EIaSdvsh2JEE4k+NFnOXJz6A1G6hzow2OMVP0SzVu+FQchp6mJkTk8Z1eM3AODeEwReBIzD8AKMI6nlCO36y5UbILT26Z8l3j7p5oMusw/15sKMCczrBIAAAAASUVORK5CYII=" alt="law-book">
        <span class="text-xs mt-1">Du Case Mat</span>
      </nuxt-link>
      <nuxt-link to="/previous-year-paper"
        class="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
        <img class="w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB30lEQVR4nO2au0oDQRSGv4AQLwE1WAiaJwgWIhZWXkpbS19AQdLZq51vobXW3goxYKGgoJ1gShttRBQFUUcWTmBZSDJnN8nOhP3gQJjMf5j/n7BhJoEM/8gDFeAK+ABMyhWLCeDOgcWbJEbyDpowcYxUHFi0aYeR614x8t4rRoyjpSbtBZvMSIR2JXgMnPi+I7/ANDAF/Phm5BRYAIaAsVC/4HUBWATOXDXyCdwAq0DOondO5t4CX64YqUZ0A8AO8AIMh8ZHgGdgS+aEqbpgZEnml4ENoBZ6bzLUrxQaf5S5gQbpkaqRaotUj8RMSZ5eWr3plpH6bmhTTaJXY7sbo1Laz3pcvRrbNLeltLsSV6+mWbNLmRM8lV6BN6AoYxcWi0miV2ObZn1Mk2oSvRrbNOvjtqkm1avRpKlJNaleTaNGwaVEK/o7qFfTqNGMhXa2g3o1jRrtWWj3O6hX06jRH7DWRLfe4qmTVK/GtKgDYF7OHQU5gxxa6JLq1RhHS03aCzaZkQhpJ2+yHYmQdvIm25EIaSdvsh2JEE4k+NFnOXJz6A1G6hzow2OMVP0SzVu+FQchp6mJkTk8Z1eM3AODeEwReBIzD8AKMI6nlCO36y5UbILT26Z8l3j7p5oMusw/15sKMCczrBIAAAAASUVORK5CYII=" alt="law-book">
        <span class="text-xs mt-1">PYQ</span>
      </nuxt-link>

      <!-- Contact Us -->
      <nuxt-link to="/contact" class="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
        <img class="w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEK0lEQVR4nO2bX4hXRRTHPxvqZljb/nERC1wUIUHawBWDzGAfCrZNesiyyBfXMkTrpZcEESGDiITEPyi+ZGCh9KCRPYjuS6EGCpsouhpYaqTbrprmn9T9yYFZuBzm7s69M/fn3ev9wHma+5u5892555w5MwslJSUlJSV54UPgfeBtYDZQx0PGLaASsXvAUeALoI2CM05N3mYngC7z7APlUeBNYA/wL9ANTPbsczywAzjjIMSfwAKqzCPAS8A24IrlpQ4CYwON1Qh0AFuBf4YRYi/QTMbMANYCZx3+Ml9mtNpk2Z+OGfMvYG4G4zIH+MVh0lEbBOZn8TJALbASuG4Z9ybwesjBZgE3Ek5+yPqBKSnHnQe8BjxrJmzjaeAHy7h3Q4qwO+Xkff3Br+qvuh9YAjymnqsxq2HQshKCfA6XPQVI6w/i/MwF4D1gjHp+EXDH4hOa8yDAYAp/0G2WclyfPcA0iwh6JfzoK8DOAAKIDaTwB43G6/fE9ClhsV39ZqXluTd8BGgPJIDYIY/84NWYxOh/JUKNxTH+4ZMx1pi0M5QIqz0zxPUxK2Gaig46RMpKSs2KgAJIVHChfpjVstziH3qUY/xEtR/3EaAuJulIY5JJuvC1Wd4/AZ0xIui+JToMUWvJGCWnSc26AJPvTvAtHlW/lc3Wk+qZDZYQGc0TulT75z4CTPLICMVOAg0J/E6fpY9jSgSZ7O/qGUmWoj5jINJ2BE/WpZx8nyVmu/iAVZbCiKwEHR2i7ftU+zZVVPGqLE1MkRhJSvqCx5hSDjuv+pRJR/kt0nZD7R061W+lPy8+TjD5QVPT86VNrQTZ+0dZosadGWlrUm1v+b5MrWOlRmwz4VgV6fe2CpFNKixKASVK1E98EOJlOhwF6DVFjBA0mO21RIftxkdEOWAyvsPAi6rtW/M+soqWBXofdjiKsIYHz/gsiqfNI9ToKhHVWyko7ybIASZQUL5xFOE7CsoTCaKCHHcVkjYTmlzyAqnaFJLFjqtAhHqZgrLRUYSrvlvTvDLGlK9dRLgGvEIBaTQZYMUxR5CD1SRIQvOZqS+uDngGGZQW4JyjCPcSRId6k/LqElva06dMmQ787SiC2K4R9upThynOXvEtfWdFq6rIjGSngOcs/TwPXHQIsV/l4cKEZq7x+pUEYXJNZBe50BRVXH+fy09iFnApwSQqxpFushx1uVh/hkfzqXnGXGepVMly+Um0JAiRoUw+iafIWZ6wv8oiyO2W3GWMG6sogNxeyyVLHXeRvqbPEnIXIXozFqDq9wiT8jiwJaPJXzVF0VHBO46F1iQmR2OjiobAq0Gu241KOhLUGuPsrLnWO2oZC3zkcVPtUwpCkzma/y+hAHK3uVBMMkJcc5j8zxSYOnNxK65Acv1h+K+Soas07eYyZ7+x74t8FllSUlJCVtwHwfwAwIpu1LQAAAAASUVORK5CYII=" alt="ringer-volume">
        <span class="text-xs mt-1">Contact Us</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
/* Styling adjustments if necessary */
</style>