<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 La ganadería sustentable es un enfoque de producción ganadera que busca equilibrar la producción de alimentos con la protección del medio ambiente, el bienestar animal y el desarrollo socioeconómico de las comunidades rurales. Este tipo de ganadería se enfoca en prácticas que reducen el impacto ambiental, promueven la salud del suelo y del agua, y mejoran la calidad de vida de las personas involucradas en el sector.
    p.mb-5 La nutrición de los bovinos es fundamental para asegurar su salud, crecimiento y productividad. Los alimentos que se les proporcionan deben satisfacer sus necesidades nutricionales, que varían según la etapa de vida, el propósito (leche, carne, trabajo) y las condiciones ambientales.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-3
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
