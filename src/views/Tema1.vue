<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de la ganadería sustentable

    .row.justify-content-center.my-3
      .col-lg-7
        p Cuando se habla de ganadería sustentable se hace referencia a los diferentes mecanismos que se utilizan para que el sistema llamado finca ganadera sea más productivo y se conserven los recursos naturales de manera eficiente sin causar ningún tipo de impacto sobre el ecosistema. 
        p.my-3 Para ello, se requiere usar herramientas de planificación de la finca que ayuden a determinar los recursos potenciales y totales de esta. Así también, se hace relevante conocer la problemática, expectativas de los productores a futuro y las estrategias tecnológicas que pueden mejorar el sistema ganadero.
      .col-lg-5.col-md-8.align-content-center
        img(src="@/assets/curso/temas/tema1/img1.png", alt="imagen decorativa")(style="height:100%")
    

    .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Planificación agroecológica de una finca ganadera

    p.my-3 Mediante la planificación agroecológica hay un intercambio de los diferentes entes que conforman el sistema como son productores ganaderos y el grupo de personas que los asesora. Por medio de esta metodología (planificación) se busca identificar las limitantes existentes de las diferentes áreas productivas de la finca y los recursos que hacen parte de esta, así como también las condiciones económicas y sociales del grupo familiar. 
    p.my-3 El objetivo principal de una buena planificación es alcanzar el máximo beneficio productivo. A continuación, las etapas del plan de finca sugeridos:
  
    .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
      .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
        figure
          img.my-3(src="@/assets/curso/temas/tema1/img3.png")
      .col-lg-8(data-aos="flip-left")
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            h1.mb-3 Paso 1
            p.mb-0 <strong>Diagnóstico:</strong> consiste en realizar un inventario y una evaluación de todos los recursos disponibles en la finca.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            h1.mb-3 Paso 2
            p.mb-0 <strong>Diseño de un plan de finca:</strong> se establecen metas y se define el tiempo en que se pretenden realizar los cambios.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            h1.mb-3 Paso 3
            p.mb-0 <strong>Ejecución del plan de finca:</strong> son las acciones definidas en el plan de finca.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            h1.mb-3 Paso 4
            p.mb-0 <strong>Evaluación del grado de las acciones ejecutadas:</strong> se evalúan las mejoras realizadas en el plan de finca.
          
    .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0(data-aos="zoom-in") Diagnóstico

    p.my-3 Una finca ganadera es un sistema que está compuesto por elementos que pueden ser pecuarios, forestales, entre otros. Estos componentes interactúan entre sí para generar beneficios a través de productos (alimentos, maderas, entre otros) y servicios ambientales. Los sistemas de finca pueden variar en función de factores como las condiciones biofísicas, el entorno social, político y ambiental, generalmente son manejados y organizados por el productor agropecuario y su familia.

    .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="flip-up")(style="background: #DFC6B3")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img4.png')})`}"
        )
        .bloque-texto-g__texto.p-3(data-aos="fade-left")(style="background: #DFC6B3")
          p.mb-1 Casi siempre el enfoque que se le da a una finca es un sistema productivo, pero es importante también realizar el enfoque de medios de vida, ya que se analiza el papel de la familia y el aporte que esta da en dotación de capitales, por lo que hace que el seno familiar se vea como unidad de análisis. Para esto el Departamento Internacional de Desarrollo (DFID) plantea valorar cinco formas de capitales o activos de medios de vida, para que haya un diagnóstico integral de la finca los cuales son: capital físico, capital humano, capital social, capital financiero y capital natural.<br>
          p.mb-0 Para realizar el diagnóstico de capitales del hogar se debe considerar la siguiente información:
          
    .row.justify-content-center.mb-3.mt-4.fondo-imagen.p-4
      .tarjeta.tarjeta--blanca.p-4(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Capital físico
                p.mt-4 Hace referencia a la infraestructura pública y privada. Cuando se habla de infraestructura pública se hace referencia al acceso de vías, carreteras principales y caminos, disponibilidad a servicios públicos (electricidad, agua, alcantarillado, teléfono, entre otros). La infraestructura privada hace referencia a los bienes e inmuebles que posee el predio como: casa, bodegas, salas de ordeño, corrales, bretes y embarcaderos.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
          
          .row.px-3.pt-3
            .col-lg-6.col-md-12.mb-4.mb-md-0.align-content-center
              h4 Capital humano
                p.mt-4 Se incluyen todos los miembros del núcleo familiar distribuidos por edad y género. En capital humano se tiene en cuenta el nivel de escolaridad y el estado de salud de la familia.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
          
          .row.px-3.pt-3
            .col-lg-6.col-md-12.mb-4.mb-md-0.align-content-center
              h4 Capital social
                p.mt-4 Se valora el número de instituciones de las cuales hace parte el núcleo familiar por ejemplo asociaciones u organizaciones públicas y relaciones de confianza o solidaridad con los miembros de la comunidad.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen decorativa')
          
          .row.px-3.pt-3
            .col-lg-6.col-md-12.mb-4.mb-md-0.align-content-center
              h4 Capital financiero
                p.mt-4 Se cuantifica el número de ingresos monetarios que provienen de la venta de productos, créditos, pensiones, entre otros.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img9.png', alt='Imagen decorativa')
          
          .row.px-3.pt-3
            .col-lg-6.col-md-12.mb-4.mb-md-0.align-content-center
              h4 Capital natural
                p.mt-4 Hace referencia a la disponibilidad de los recursos naturales con los que cuenta el predio como tierra, salud del suelo en cuanto a materia orgánica, pedregosidad, drenaje, fuentes naturales de agua, diversidad biológica, fauna, manglares, bosques, salud de los cultivos (pastos), yacimientos minerales y minas. 
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')

    .row.justify-content-center.my-4
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
            h5 figura 1.
            span <em>Croquis de una finca</em>
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Se muestra un croquis de una finca.')
              figcaption Nota. SENA (2024).

          .tarjeta.color-white.p-3(x="39%" y="55%" numero="1")
            .h5.mb-2 Pasturas
            p 8,0 ha

          .tarjeta.color-white.p-3(x="67%" y="35%" numero="2")
            .h5.mb-2 Bosque
            p 5,2 ha

          .tarjeta.color-white.p-3(x="61%" y="52%" numero="3")
            .h5.mb-2 Cultivos (café)
            p 5,2 ha

          .tarjeta.color-white.p-3(x="19%" y="52%" numero="4")
            .h5.mb-2 Fuentes de agua
            p 0,2 ha

          .tarjeta.color-white.p-3(x="67%" y="70%" numero="5")
            .h5.mb-2 Cultivos (alimentos)
            p 0,2 ha

          .tarjeta.color-white.p-3(x="57%" y="66%" numero="6")
            .h5.mb-2 Infraestructura (casa)
            p 0,2 ha

          .tarjeta.color-white.p-3(x="73%" y="52%" numero="7")
            .h5.mb-2 Cancha de pasto
            p 4,2 ha


    .row.justify-content-center.fondo-imagen-5
      .col-lg-12
        .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Diseño de un plan de finca

        .row.justify-content-center
          .col-lg-9
            p.my-3 En esta fase se deja claro lo que se quiere lograr a corto, mediano y largo plazo, según los objetivos de la planificación. Se recomienda elaborar un plan de finca, en el cual los cambios propuestos sean cercanos y acordes con los recursos naturales existentes en la propiedad y donde se tengan en cuenta los factores agroecológicos, las posibilidades económicas y el entorno del lugar.
            .row.my-3(data-aos="flip-up")
              .col-lg-12.crd--avatarHorizontal-left-borde-tarjeta.py-3.mb-3.m-auto
                .row.align-items-center
                  .col-auto(style="z-index:1")
                    figure
                      img(src="@/assets/curso/temas/tema1/img12.svg", alt="", width= "100px", height="100px")
                  .col(style="z-index:1")
                    p.mb-0 El diseño debe ser planeado entre un técnico que brinde su punto de vista profesional y el grupo familiar, teniendo en cuenta sus necesidades y su visión. Los cambios que se propongan deben apuntar a un beneficio económico ambiental.
            p.my-3 Para realizar un plan se recomienda hacer un croquis donde se ubiquen las mejoras y su orden de prioridad, además analizar si los cambios propuestos son compatibles con las expectativas del productor, la capacidad del suelo, el tiempo de ejecución y el costo. La pendiente de los predios es criterio importante a la hora de la distribución de los espacios, para disponer del uso del suelo se puede usar la siguiente matriz como guía:
          .col-lg-3.col-md-6(data-aos="fade-left").align-content-center
            figure
              img.my-3(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')(style="min-height: 300px")

        
        .row.justify-content-center
          .col-lg-10.col-md-12
            .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 1.
                span <em>Uso del suelo áreas</em>
            .tabla-b
              table
                caption Nota. Mora (2005)
                thead
                  tr
                    th.text-center.text-light(style="background: #AF7142; border: 1.2px solid #000000") Uso del suelo
                    th.text-center(style="background: #FFFFFF; border: 1.2px solid #000000") Áreas muy quebradas<br>< 40 %
                    th.text-center(style="background: #FFFFFF; border: 1.2px solid #000000") Áreas quebradas<br>20 a 40 %
                    th.text-center(style="background: #FFFFFF; border: 1.2px solid #000000") Áreas poco quebradas<br>5 - 20 %
                    th.text-center(style="background: #FFFFFF; border: 1.2px solid #000000") Áreas planas<br>< 5%
                tbody
                  tr
                    td Reforestación protectora
                    td X
                    td 
                    td 
                    td 
                  tr
                    td Regeneración natural
                    td X
                    td 
                    td 
                    td 
                  tr
                    td Sistemas agroforestales
                    td 
                    td X
                    td X
                    td 
                  tr
                    td Cultivos perennes
                    td 
                    td X
                    td X
                    td 
                  tr
                    td Pasturas con baja densidad arbórea
                    td 
                    td 
                    td 
                    td X
                  tr
                    td Pasturas con alta densidad arbórea
                    td 
                    td X
                    td X
                    td 
                  tr
                    td Cultivos de alimentos anuales (maíz, fríjol, yuca)
                    td 
                    td 
                    td X
                    td X
                  tr
                    td Hortalizas
                    td 
                    td 
                    td X
                    td X
                  tr
                    td Prácticas de conservación (barreras en contorno, acequias de desviación, entre otros)
                    td X
                    td X
                    td 
                    td 
                  tr
                    td Bancos forrajeros de corte y acareo
                    td 
                    td 
                    td X
                    td X
                  tr
                    td Caña y pastos de corte
                    td 
                    td 
                    td X
                    td X

        .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Ejecución del plan de finca

        p.my-3 En esta fase se contemplan las opciones que ayudan a conservar los recursos naturales y a satisfacer las necesidades de la familia.
        p.my-3 A continuación, se mencionan algunas alternativas y su importancia de incorporarlas en el sistema de finca:

        
        .row.justify-content-center.mb-4
          .col-lg-4.col-md-6.align-content-center(data-aos="fade-right").align-content-center
            figure.justify-content-center
              img.my-3(src="@/assets/curso/temas/tema1/img14.png", alt="alt")(style="min-height: 400px")
          .col-lg-8.justify-content-center.align-content-center(data-aos="flip-left")
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Inclusión del componte leñoso")
                .col-12
                  p.mb-0 En las fincas ganaderas es importante sembrar árboles y arbustos porque estos sirven como alimento para los animales, dan sombra, aportan madera y aserrío, sirven como hábitat para animales silvestres; además pueden ayudar a conservar las fuentes de agua, el suelo y facilitan la regeneración natural de los potreros. Los árboles pueden plantarse como cortinas rompevientos, cercas vivas, plantaciones compactas, dispersos en los potreros o barreras en contorno.

              .row(titulo="Dejar un área para sembrar un huerto casero")
                .col-12
                  p.mb-0 Una granja familiar o un huerto casero proporciona alimento a las familias, además de la venta de estos productos pueden generar ingresos económicos adicionales. En los huertos caseros se pueden cultivar plantas aromáticas, flores, frutos, leguminosas que pueden servir como alimentos para humanos y animales. Además, se pueden tener plantas de diferentes tamaños, con el fin de aprovechar el espacio y las condiciones ambientales tales como agua y luz.

              .row(titulo="La alimentación del ganado")
                .col-12
                  p.mb-0 Para proporcionar una adecuada alimentación se debe tener en cuenta lo siguiente: Los alimentos suministrados al animal deben aportar los nutrientes requeridos como son proteínas, energía y minerales. La cantidad suministrada debe ser suficiente para que el animal se sienta saciado y así pueda aumentar la producción tanto de carne como de leche.

              .row(titulo="El manejo del ganado")
                .col-12
                  p.mb-0 Una buena alimentación que sea balanceada y nutritiva a base de forrajes (pastos de corte y leguminosas), suplementos (fibrosos, proteicos, fuentes de carbohidratos, lípidos, bloques nutricionales, ensilajes, henos y follaje de árboles).

              .row(titulo="Crianza y el manejo de los bovinos")
                .col-12
                  p.mb-0 Para la crianza y el manejo de los bovinos se debe disponer de espacios adecuados de acuerdo con el número de animales y los pastos de los potreros deben ser de calidad y se debe contar con recursos para realizar suplementos. Control sanitario (vacunas y baños) para evitar que se generen plagas en el animal como garrapatas, parásitos internos y larvas de moscas (nuches).

    p.my-3 Un animal por regla general consume forrajes en un 10% de su peso vivo. Por ejemplo, una res que pese 500 kg come 50 kg de forraje verde. Por tal razón el productor ganadero debe garantizar que el área de potreros y la suplementación estén aportando los nutrientes que el animal requiere para su mantenimiento y así poder producir una buena cantidad de leche y carne de alta calidad. En la alimentación de los bovinos se debe incluir forraje extra, el cual puede ser de 15 a 20% para favorecer la capacidad de selección.

    .row.justify-content-center.mb-3.mt-4.fondo-imagen2.p-4
      .tarjeta.tarjeta--blanca.p-2(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.p-3.justify-content-center
            .col-lg-7.align-content-center.justify-content-center
              p.mt-4 <b>Selección de la genética en finca ganadera:</b> cuando se va a elegir en la finca ganadera el componente genético es muy importante tener en cuenta las consecuencias que tendrá esta decisión para la unidad pecuaria en cuanto a la productividad. Una buena elección genética se verá reflejada en el comportamiento productivo y la reproducción de crías, de lo contrario los malos resultados se verán a mediano y largo plazo, lo cual traerá pérdidas económicas para la finca.
            .col-lg-5.col-md-8.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen decorativa')
          .row.p-3.justify-content-center
            .col-lg-9.align-content-center
              p.mt-4 <b>Crianza de cercos y gallinas:</b> para las fincas la producción de especies menores puede ser muy buena alternativa, pues proporciona alimentos como carne, leche y huevos a la familia, además de generar un ingreso adicional, ya que estos productos tienen buen potencial comercial. Con los estiércoles generados por los animales se pueden elaborar abonos orgánicos y biogás. Los elementos que conforman el sistema finca deben interactuar entre sí para que haya una interacción de flujos y así evitar que los residuos sólidos y líquidos se pierdan y terminen contaminando el medio ambiente, un ejemplo de ello es el caso de los cerdos que se alimentan con recursos de la finca y luego los desechos que estos generan se pueden llevar a un biodigestor y de ahí se pueden sacar varios productos como biogás o gas metano que puede ser utilizado para la generación de energía.
            .col-lg-3.col-md-7.align-content-center.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')
          .row.p-3.justify-content-center
            .col-lg-7.align-content-center
              p.mt-4 <b>El recurso agua:</b> el agua es un recurso muy importante para el consumo humano y la producción agropecuaria, por esta razón se debe cuidar para garantizar su disponibilidad en la finca ganadera a largo plazo. Cuando hay buena disponibilidad de agua en las unidades productivas, esto tiene una connotación positiva en la producción de los animales, en la salud del hato, de las personas y de los cultivos.
            .col-lg-5.col-md-8.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img18.png', alt='Imagen decorativa')

    .row.justify-content-center.my-4
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
            h5 figura 2.
            span <em>El recurso agua</em>
        figure(data-aos="zoom-up")
          img(src='@/assets/curso/temas/tema1/img19.png', alt='Se muestra una imagen del recurso agua.')
        figcaption Nota. SENA (2024).

    .row.justify-content-center.my-3
      .col-lg-4.col-md-6.align-content-center(data-aos="fade-right")
        figure
          img.my-3(src='@/assets/curso/temas/tema1/img20.png', alt='Imagen decorativa')(style="min-height: 500px")
      .col-lg-8(data-aos="fade-left").align-content-center
        .row.p-2.my-2(style="background: #EFE2D9")
          .col-lg-12
            p <b>Para conservar el agua en el predio se debe tener en cuenta lo siguiente:</b>
            ul.mt-0
              li
                span Proteger las nacientes evitando que los animales de la finca las contaminen y destruyan la regeneración natural de estas.
            ul.mt-0
              li
                span Preservar los bosques que se encuentran en las orillas de los ríos y las quebradas.
            ul.mt-0
              li
                span Construir obras en las cuales se pueda almacenar agua como tanques y abrevaderos.
            ul.mt-0
              li
                span Los reservorios como lagunas o aguaderos deben tener un buen sistema de distribución de agua y deben estar protegidos.
        .row.pe-lg-3.justify-content-center.align-items-center
          .col-auto.pe-2.img-l.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema1/img22.svg")
          .col
            p.mb-0 <b>Desechos orgánicos:</b> en muchas fincas se acumulan los estiércoles en especial las ganaderas y esto se convierte en un problema ambiental grave. Por otra parte, los desechos de pastos que quedan en los comederos son llevados a fuentes de agua como lagunas de fincas ganaderas o se lavan los estiércoles producidos en el ordeño y estos llegan a las quebradas, lo cual ocasiona contaminación biológica en el agua. 
        p.mb-3 En otros sistemas productivos, el estiércol es acumulado en los corrales, lo que genera malos olores y proliferación de insectos como las moscas que son un foco de contaminación para la leche. Sin embargo, existen varias alternativas para mitigar el impacto ambiental causado por estiércoles como son los biodigestores, bioabonos o lixiviados.
    .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Evaluación del grado de las acciones ejecutadas

    .row.justify-content-center
      .col-lg-5.align-content-center
        p.my-3 En esta etapa final de la planificación, en ocasiones las metas se logran cumplir sin contratiempos, pero en otras las condiciones son adversas y hacen que los objetivos planeados en el proyecto no se logren según lo establecido. Es importante que cada año se realicen balances de desempeño de las mejoras implementadas en la finca ganadera.
        p.my-3 En la evaluación se deben resolver las siguientes preguntas:
      .col-lg-7.col-md-12.align-content-center
        .row.my-3.align-content-center
          .col-lg-6.col-md-6.crd--avatarHorizontal-left-borde-tarjeta.py-3.mb-3.m-auto.align-content-center
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema1/img23.svg", alt="", width= "70px", height="70px")
              .col(style="z-index:1")
                p.mb-0 ¿Las mejoras si funcionaron?
          .col-lg-6.col-md-6.crd--avatarHorizontal-left-borde-tarjeta.py-3.mb-3.m-auto.align-content-center
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema1/img23.svg", alt="", width= "70px", height="70px")
              .col(style="z-index:1")
                p.mb-0 ¿La finca ganadera sí está generando ingresos económicos con las mejoras realizadas?
          .col-lg-6.col-md-6.crd--avatarHorizontal-left-borde-tarjeta.py-3.mb-3.m-auto
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema1/img23.svg", alt="", width= "70px", height="70px")
              .col(style="z-index:1")
                p.mb-0 ¿La finca sí se valorizó con las mejoras?
          .col-lg-6.col-md-6.crd--avatarHorizontal-left-borde-tarjeta.py-3.mb-3.m-auto
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema1/img23.svg", alt="", width= "70px", height="70px")
              .col(style="z-index:1")
                p.mb-0 ¿Se está conservando el medio ambiente?
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
