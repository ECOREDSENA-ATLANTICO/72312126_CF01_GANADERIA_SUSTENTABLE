<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo de información de la finca ganadera

    p.mb-4 Las fincas ganaderas deben contar con un buen sistema de información, el cual debe registrar todos los acontecimientos que ocurren en el sistema de producción. La información que se genera en todas las unidades productivas se debe registrar en formatos para así generar una base de datos. Para catalogar la información de la finca ganadera se deben tener en cuenta los siguientes aspectos claves:

    SlyderF.custom.ali(columnas="col-lg-4 col-md-12")(data-aos="flip-up")
      .tarjeta.tarjeta--slyder.p-4.fnd-44
        figure.mb-4(data-aos="zoom-in")(style="justify-items: end")
          img.img-tar1(src="@/assets/curso/temas/tema2/img1.svg")
        h5.mb-3 Reproducción
        p.mb-0 Se puede decir que el modelo de reproducción ganadera es un factor importante desde el punto de vista económico, porque garantiza que las especies sobrevivan y que haya un mejoramiento de esta, además garantiza que haya una población adecuada para hacer programas de selección.
      .tarjeta.tarjeta--slyder.p-4.fnd-44
        figure.mb-4(data-aos="zoom-in")(style="justify-items: end")
          img.img-tar1(src="@/assets/curso/temas/tema2/img2.svg")
        h5.mb-3 Producción
        p.mb-0 Cuando se producen bovinos se hace necesario analizar la productividad de un animal con otro, para lo cual se debe registrar el comportamiento de los animales, de la carne y de la leche.
      .tarjeta.tarjeta--slyder.p-4.fnd-44
        figure.mb-4(data-aos="zoom-in")(style="justify-items: end")
          img.img-tar1(src="@/assets/curso/temas/tema2/img3.svg")
        h5.mb-3 Inventario del hato
        p.mb-0 Es importante manejar esta información, ya que permite determinar la cantidad de animales existentes y su categorización. El inventario de los animales es una herramienta dinámica y en especial para aquellos sistemas donde hay hembras productoras. El manejo de los registros debe ejecutarse semanalmente y el inventario o chequeo físico debe realizarse cada dos meses.
      .tarjeta.tarjeta--slyder.p-4.fnd-44
        figure.mb-4(data-aos="zoom-in")(style="justify-items: end")
          img.img-tar1(src="@/assets/curso/temas/tema2/img4.svg")
        h5.mb-3 Alimentación
        p.mb-0 La alimentación de los animales en una finca ganadera es muy importante, ya que de esta depende la producción tanto de carne como de leche. Por esto se deben llevar registros en los cuales se indique el tipo de ración alimenticia que se está suministrando (si es proteica, energética o mineral), la cantidad y número de veces al día que se le proporciona.
      .tarjeta.tarjeta--slyder.p-4.fnd-44
        figure.mb-4(data-aos="zoom-in")(style="justify-items: end")
          img.img-tar1(src="@/assets/curso/temas/tema2/img5.svg")
        h5.mb-3 Sanidad
        p.mb-0 La salud de los animales es muy importante en la finca ganadera e incide en la calidad de la leche y de la carne. Por tal razón es conveniente llevar un registro que incluya el estado del ganado, los animales enfermos y el tratamiento que se les está efectuando, para así realizar un monitoreo de la situación.

    //- p.mb-3.mt-4 Los registros más usados en la finca ganadera incluyen los siguientes formatos básicos:

    //- .row.my-3.align-content-center(data-aos="fade-down")
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto
    //-     .row.align-items-center.align-content-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Control productivo de hembras.
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto
    //-     .row.align-items-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Registro de producción de leche.
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto
    //-     .row.align-items-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Control sanitario.
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto
    //-     .row.align-items-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Control de manejo de potreros.
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto
    //-     .row.align-items-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Control de suplementación.
    //- .row.my-3.align-content-center.align-content-center
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto.align-content-center
    //-     .row.align-items-center.align-content-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Registro individual y hembras.
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto.align-content-center
    //-     .row.align-items-center.align-content-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Inventario de maquinaria y equipos.
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto.align-content-center
    //-     .row.align-items-center.align-content-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Registro de lluvias.
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto.align-content-center
    //-     .row.align-items-center.align-content-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Comprobantes<br>contables.
    //-   .col-lg-2.col-md-4.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto
    //-     .row.align-items-center
    //-       .col-auto(style="z-index:1; padding-right: 0.4em")
    //-         figure
    //-           img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "70px", height="70px")
    //-       .col(style="z-index:1; padding: 0")
    //-         p.mb-0 Control de peso.
            
            
    p.mb-3.mt-4 Los registros más usados en la finca ganadera incluyen los siguientes formatos básicos:
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Control productivo de hembras
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Registro de producción de leche
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Control sanitario
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Control de manejo de potreros
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Control<br>de suplementación
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Registro individual y hembras
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Inventario de maquinaria y equipos
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Registro de lluvias
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Comprobantes contables
      .col-xl-3.col-lg-3.col-md-6
        .crd_02
            .crd_02__icon.dan
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")          
            .crd_02__txt
              p Control de peso
</template>

<script>
export default {
  name: 'Tema2',
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
