<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Pastos y técnicas para la conservación de forrajes

    .row.justify-content-center
      .col-lg-4.col-md-6.align-content-end(data-aos="fade-right")
        figure
          img.my-3(src='@/assets/curso/temas/tema4/img1.png', alt='Texto que describa la imagen')(style="min-height: 400px")
      .col-lg-8(data-aos="fade-left")
        p.mb-2 El pasto es una gramínea que es utilizada como forraje para la alimentación  animal porque provee nutrientes como carbohidratos, proteínas, aminoácidos, minerales y vitaminas, esto hace del pasto un alimento completo y económico. Las pasturas crecen en áreas destinadas a la producción ganadera de bovinos, entonces se puede decir que el pasto es un cultivo que debe considerarse una unidad productiva dentro del sistema de producción. Es importante saber en un predio la disponibilidad que se tiene de este cultivo.
        .row.justify-content-center.fnd
          .col-lg-12
            p.mb-2 <strong>La importancia de los pastos en la ganadería radica en:</strong>
            ul.mt-0
              li
                span Los pastos son fuente de alimentación económica.
            ul.mt-0
              li
                span Es un cultivo de larga duración.
            ul.mt-0
              li
                span Es un cultivo de producción continua.
            ul.mt-0
              li
                span Ayuda a proteger el terreno de erosiones.
            ul.mt-0
              li
                span A mayor calidad del pasto, mayor va a ser la productividad en la finca ganadera.
                
    h5.mt-4.green_icon(data-aos="fade-left") Selección de especies de pasto según las condiciones de la finca
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')

    p.my-3 Las gramíneas se dividen en naturales, mejoradas e introducidas. Las gramíneas naturales son las que crecen en forma natural y son denominadas criollas, el único control que se les realiza es cuando se introducen animales en el terreno para el pastoreo. La mayoría de las ganaderías del país se producen a base de pastos naturales, estas gramíneas son de baja productividad pues no crecen mucho, aunque las especies criollas son las únicas que logran crecer en condiciones difíciles de suelos y clima.
    p.my-3 Las gramíneas mejoradas son seleccionadas por sus características como forrajes, donde el hombre tiene una intervención directa al seleccionar las semillas para optimizar la producción, estas plantas mejoradas tienen un mayor crecimiento y responden muy bien a la aplicación de fertilizantes.

    h5.mt-4.green_icon(data-aos="fade-left") Consideraciones para la selección de los pastos
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')

    p.my-3 Al seleccionar los pastos es importante tener en cuenta lo siguiente:

    .tarjeta.tarjeta--gris.p-4(data-aos="flip-up")
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Sistema de producción")
          .col-lg-12.mb-4.mb-md-0
            p.text-center Pastoreo y corte.
          .col-lg-12
            figure
              img(src='@/assets/curso/temas/tema4/img2.png', alt='Texto que describa la imagen')

        .row(titulo="Formas de crecimiento")
          .col-lg-12.mb-4.mb-md-0
            p.text-center Matón, rastrero.

          .col-lg-12
            figure
              img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
        .row(titulo="Condiciones agroecológicas del lugar")
          .col-lg-12.mb-4.mb-md-0
            p.text-center Cantidad de lluvia, temperatura y fertilidad del suelo.

          .col-lg-12
            figure
              img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen')
        
        .row(titulo="Valor nutritivo")
          .col-lg-3.mb-4.mb-md-0.align-content-center
            p Las gramíneas presentan bajo contenido de proteínas a diferencia de las leguminosas como el fríjol, alfalfa, kudzu, centrosema; siendo la época de prefloración cuando se encuentra en un promedio de un 10 a un 15%, a medida que la planta va creciendo el contenido de proteínas disminuye.

          .col-lg-9
            figure
              img(src='@/assets/curso/temas/tema4/img5.png', alt='Texto que describa la imagen')
        .row(titulo="Producción")
          .col-lg-12.mb-4.mb-md-0
            p.text-center Este factor está determinado por la cantidad de hectáreas de producción de pasto.

          .col-lg-12
            figure
              img(src='@/assets/curso/temas/tema4/img6.png', alt='Texto que describa la imagen')
        .row(titulo="Palatabilidad")
          .col-lg-12.mb-4.mb-md-0
            p.text-center Determina si el pasto es agradable para el consumo del animal.

          .col-lg-12
            figure
              img(src='@/assets/curso/temas/tema4/img7.png', alt='Texto que describa la imagen')
        .row(titulo="Tiempo de recuperación")
          .col-lg-3.mb-4.mb-md-0.align-content-center
            p Es el tiempo que se deja descansar el potrero para que el pasto se recupere, este periodo está relacionado con el crecimiento y desarrollo de la especie.

          .col-lg-9
            figure
              img(src='@/assets/curso/temas/tema4/img8.png', alt='Texto que describa la imagen')
       
        .row(titulo="Otros")
          .col-lg-3.mb-4.mb-md-0.align-content-center
            p • Facilidad de propagación.<br>• Tolerancia a plagas y enfermedades.<br>• Capacidad de competencia con otras especies en el crecimiento.


          .col-lg-9
            figure
              img(src='@/assets/curso/temas/tema4/img9.png', alt='Texto que describa la imagen')

    .bloque-texto-g.p-3.p-sm-4.p-md-5.my-4(data-aos="flip-up")(style="background: #F6F8E9")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-3(data-aos="fade-left")(style="background: #F6F8E9")
        p.mb-3 <strong>Recomendaciones para tener en cuenta en pastos que se adapten mejor a su finca:</strong><br>
          ul.mb-0
            li
              span Conocer la capacidad que tiene el pasto para crecer en el suelo, por esto es necesario que usted conozca las condiciones físicas y químicas del suelo (fertilidad, humedad y topografía).<br>
          ul.mb-0
            li
              span En suelos fértiles se recomienda sembrar guinea y marandú.<br>
          ul.mb-0
            li
              span En suelos con baja fertilidad usar brachiaria humidicola, andropogon y brachiaria decumbens.<br>
          ul.mb-0
            li
              span En suelos con mal drenaje usar pasto jazmín, setaria kasungula y brachiaria humidícola.<br>
          ul.mb-0
            li
              span Para terreno de uso intensivo en verano y de altos niveles de fertilización usar pasto Tanzania y elefante.<br>
          ul.mb-0
            li
              span En problemas por el insecto como el salivazo es recomendado usar plantas como el andropogon y pasto marandú.<br>

  
    .row.justify-content-center.my-3
      .col-lg-10.col-md-12
        h5.mt-4.green_icon(data-aos="fade-left") Pasto de corte
          img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')

        p.my-3 En Colombia los pastos de corte se conocen con los siguientes nombres:

        .row.justify-content-center(data-aos="zoom-in")
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img12.png', alt='Texto que describa la imagen')
            p.text-center Elefante
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img13.png', alt='Texto que describa la imagen')
            p.text-center Sorgo o mijo perla
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img14.png', alt='Texto que describa la imagen')
            p.text-center Pampa verde
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img15.png', alt='Texto que describa la imagen')
            p.text-center Hindú
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img16.png', alt='Texto que describa la imagen')
            p.text-center Camerún
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img17.png', alt='Texto que describa la imagen')
            p.text-center King grass
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img18.png', alt='Texto que describa la imagen')
            p.text-center Imperial
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img19.png', alt='Texto que describa la imagen')
            p.text-center Morado
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img20.png', alt='Texto que describa la imagen')
            p.text-center Taiwán
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img21.png', alt='Texto que describa la imagen')
            p.text-center Gramalote
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img22.png', alt='Texto que describa la imagen')
            p.text-center Maralfalfa
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img23.png', alt='Texto que describa la imagen')
            p.text-center Brasil 
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema4/img24.png', alt='Texto que describa la imagen')
            p Cuba 22

    h5.mt-4.green_icon(data-aos="fade-left") Generalidades del pasto de corte
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-3.mt-4.fondo-imagen4.p-4
      .tarjeta.tarjeta--blanca.p-4(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              p Las especies de pastos se adaptan a pisos térmicos desde 0 a 1.800 m.s.n.m. por encima de los 18.000. Su producción se reduce porque hay menos radiación solar, lo que hace que la capacidad fotosintética sea menor, sin embargo, algunos de los pastos se adaptan bien a esta altura.
              p.mt-2 Debido a la biomasa que producen los pastos, se requiere de mucha agua. Entre mayor estén al nivel del mar, van a necesitar más agua para riego y entre más pobre sea el suelo, más limitado será su desarrollo y producción.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema4/img26.png', alt='Imagen decorativa')        
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              p De las especies de pastos vistas anteriormente algunas se han mejorado genéticamente para que resistan ataques de plagas y épocas de sequía. Estos pastos se pueden llamar rústicos, es decir, que no necesitan aportes adicionales de nutrientes, con lo que el suelo les suministra hace que se desarrollen.
              p.mt-2 Los pastos no se adaptan a suelos inundados a pesar de que son una especie de alta extracción.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema4/img27.png', alt='Imagen decorativa')        
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              p Los pastos una vez alcanzan la edad de floración empiezan a producir inflorescencias, es decir, espinas, lo que significa que han perdido un 30% de su calidad nutricional y a medida que van aumentando la edad de ser cosechado, la lignificación se acrecienta, por lo que aumenta la pérdida nutricional, lo que quiere decir que cada vez son menos digestibles para los rumiantes que los consumen.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema4/img28.png', alt='Imagen decorativa')        
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              p Los pastos nunca se deben cosechar en periodo de crecimiento o en edad de floración, pues cuando se encuentran en estado juvenil no se han desarrollado completamente y pueden intoxicar al animal o generarles problemas de digestión, haciendo que este excrete mucho, por ello los pastos deben ser cosechados en el tiempo requerido por la especie, con el fin de aprovechar todo su contenido nutricional.
              p.mt-2 Se ha comprobado que ningún pasto cubre el 100% del requerimiento nutricional del ganado bovino a pesar de que este tenga su mejor valor nutricional, por eso es falso afirmar que se puedan reemplazar pastos por concentrados.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema4/img29.png', alt='Imagen decorativa')
                
    h5.mt-4.green_icon(data-aos="fade-left") Leguminosas
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')

    .row.justify-content-center.my-3
      .col-lg-3.col-md-5.align-content-center
        figure
          img.my-3(src='@/assets/curso/temas/tema4/img30.png', alt='Texto que describa la imagen')(style="min-height: 350px")
      .col-lg-9.align-content-center
        p.my-2 Las leguminosas forrajeras tienen buena capacidad de fijar nitrógeno, sus hojas lo convierten en forma de proteínas, por esta razón estas plantas tienen alto contenido de proteína que puede variar entre 14 y 32% en hojas y semillas y  tienen la particularidad de conservar esos porcentajes por largos periodos sin que el verano les afecte.
        p.mb-2 Esta especie forrajera es pobre en fibra lo que la hace más digestible y altamente aprovechable por los bovinos, además su contenido en carbohidratos es similar al pasto.
        .row.justify-content-center.fnd
          .col-lg-5
            p.mb-2 <strong>Las leguminosas más conocidas son:</strong>
            p.mb-1.ms-3 Fríjol.
            p.mb-1.ms-3 Fríjol (gandul).
            p.mb-1.ms-3 Crotaria.
            p.mb-1.ms-3 Kudzú.
            p.mb-1.ms-3 Maní forrajero.
            p.mb-1.ms-3 Alfalfa.
            p.mb-1.ms-3 Trébol blanco.
          .col-lg-7.col-md-8.align-content-center
            figure
              img.my-3(src='@/assets/curso/temas/tema4/img31.svg', alt='Texto que describa la imagen')

    h5.mt-4.green_icon(data-aos="fade-left") Generalidades del pasto de corte
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-content-center(data-aos="fade-up")
      .col-lg-1.d-none.d-lg-block.align-content-center
        img(src='@/assets/curso/temas/tema4/img32.svg', alt='Imagen decorativa', heigh)
      .col-lg-4.align-content-center
        p.mb-1 Establecer las praderas es una estrategia que usan los productores para que las empresas ganaderas se mantengan en estado productivo y con bajo costo.
        p En los sistemas ganaderos instaurar praderas es una alternativa de forraje para conservar de manera eficiente los bovinos.
      .col-lg-7
        .fnd-2
              p.mb-2 <strong>Cuando se va a establecer una pradera se debe tener en cuenta lo siguiente:</strong>
              ul.mt-0 
                li
                  span Seleccionar la especie forrajera.
              ul.mt-0 
                li
                  span Tener en cuenta los factores agroecológicos de la zona como el clima, suelo, radiación solar y vegetación nativa.
              ul.mt-0 
                li
                  span Tener en cuenta factores inherentes al sistema productivo.

    
    .row.justify-content-center
      .col-lg-9(data-aos="fade-right")
        h5.mt-4.green_icon(data-aos="fade-left") Preparación del terreno
          img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')
        p.my-3 Para preparar el suelo se realizan una serie de prácticas culturales, las cuales deben ser las adecuadas para garantizar que la semilla germine y luego se desarrolle en plantas.
        
        h5.mt-4.green_icon(data-aos="fade-left") Implementos para la preparación
          img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')
        p.my-3 La intensidad de labranza depende de factores como las propiedades físicas del suelo, la topografía del terreno, tipo de malezas y el material de propagación. Los implementos adecuados para la preparación del terreno son los que ayudan a su des compactación en la profundidad y que permitan que haya un buen desarrollo de las raíces de las plantas sembradas.
        
        h5.mt-4.green_icon(data-aos="fade-left") Siembra
          img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')
        p.my-3 Para la siembra de forrajes como pastos y leguminosas se debe tener en cuenta la preparación del terreno, época de siembra, material de propagación (semillas o plántulas) y el sistema de siembra. Al establecer el cultivo se recomienda asociar gramíneas con leguminosas de manera simultánea.
      .col-lg-3.col-md-5.align-content-end(data-aos="fade-left")
        img.my-3(src='@/assets/curso/temas/tema4/img33.png', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-6.m-0(data-aos="fade-right")
        .tarjeta.tarjeta--slyder.p-4.fnd-45
          figure.mb-4(data-aos="zoom-in")(style="justify-items: end")
            img.img-tar1(src="@/assets/curso/temas/tema4/img34.svg")
          h5.mb-3 Calidad y cantidad de semillas:
          p.mb-3 La calidad de la semilla es muy importante para un cultivo porque de esta dependen las características fenotípicas de la especie vegetal y la viabilidad de la germinación. Cuando se utilizan semillas de baja calidad se debe aumentar la cantidad para garantizar que germine una buena población de plántulas y así asegurar una buena cobertura del suelo y un rápido establecimiento de la pradera. Cuando se utilizan semillas de producción artesanal, es decir, no certificadas, es aconsejable realizar pruebas de germinación para determinar la cantidad de material de siembra y su vigor. Al establecer praderas con material vegetativo como tallos, cepas o estolones es mejor sembrarlos en los meses de lluvias para así asegurar un buen desarrollo de las plantas.
      .col-lg-6.m-0.my-3(data-aos="fade-left")
        .tarjeta.tarjeta--slyder.p-4.fnd-44
          figure.mb-4(data-aos="zoom-in")(style="justify-items: end")
            img.img-tar1(src="@/assets/curso/temas/tema4/img35.svg")
          h5.mb-3 Aforos de pastos:
          p.mb-0 Es una técnica muy usada para calcular la cantidad total de pasto producido en una pradera, esto se hace por medio del uso de un metro cuadrado por zona a analizar, se hace en promedio de 3 a 15 veces según lo requiera la muestra del aforo. Para este procedimiento es importante tener en cuenta los niveles de crecimiento del pasto, ya sea alto, medio o bajo y luego se corta lo que queda dentro del área donde se realiza el aforo, se pesa el material recolectado y se divide por la cantidad de muestras tomadas.
          p.mb-2 El aforo no es una medición exacta sino un muestreo que se realiza en una zona determinada. Por medio de esta técnica se busca estimar la producción total de forraje para la alimentación animal. Para determinar la cantidad de pasto de un área se han empleado varios métodos, los cuales comparten ciertos parámetros, pero la diferencia radica en el procedimiento de campo.
    
    .row.justify-content-center.my-3(data-aos="flip-up")
      .col-lg-10.col-md-12
        .row.fnd-img.justify-content-end
          .col-lg-8.px-4.pt-3
            p.mb-2 <strong>¿Por qué se debe realizar aforo en un potrero?</strong>
              ul.mb-1 
                li
                  span La razón más relevante es para poder determinar la cantidad de pasto existente por lote y así poder planificar de forma eficaz el pastoreo.
              ul.mb-1 
                li
                  span Este método sirve para hacer un pastoreo continuo haciendo rotación de lotes.
              ul.mb-1 
                li
                  span Esto se hace para controlar la cantidad de pasto y así evitar que no se agote este recurso en zonas de pastoreo.
              ul.mb-1 
                li
                  span Cuando se determina la cantidad de pasto producido por hectárea se puede determinar la carga del animal.
          .col-lg-4.col-md-8.align-content-end
            img(src='@/assets/curso/temas/tema4/img37.png', alt='Imagen decorativa')

    h5.mt-4.green_icon(data-aos="fade-left") Métodos de aforo por doble muestreo
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')
    p.my-3 Este método es el más común y consiste en tomar tres o más submuestras en diferentes puntos del área a analizar, esto se hace visualmente teniendo en cuenta el crecimiento del pasto (alto, medio, bajo).

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
            h5 figura 3.
            span <em>Aforo por doble muestreo</em>
        figure
          img(src='@/assets/curso/temas/tema4/img39.svg', alt='Se muestra un aforo por doble muestreo.')
        figcaption Nota. SENA.

    h5.mt-4.green_icon(data-aos="fade-left") El método más común para tomar la muestra en terreno es
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')

    .row.justify-content-center.my-2
      .col-lg-7.align-content-center
        p.mb-3 Construir un marco de un metro cuadrado de área (1m x 1m). Para esto se utiliza un tubo de PVC de media pulgada, partido en cuatro partes de un metro y formando un cuadrado, conseguir una báscula y un objeto para cortar como un machete, cuchillo o tijeras de jardinería.
        p.mb-3 Luego colocar en el área donde está el pasto el cuadro abarcando más o menos dos surcos y cortar el pasto que está dentro del cuadrado.
        p Pesar cada muestra, sumar y dividir por la cantidad de muestras tomadas.
      .col-lg-5.my-3
        SlyderF.custom(columnas="col-lg-12 col-md-6")
          img(src='@/assets/curso/temas/tema4/img40.svg', alt='Imagen decorativa')
          img(src='@/assets/curso/temas/tema4/img41.svg', alt='Imagen decorativa')
          img(src='@/assets/curso/temas/tema4/img42.svg', alt='Imagen decorativa')
    
    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10  
        .cajon.color-primario.p-4(style="background: #EFF2D5")
          p.mt-0.mb-0 Este procedimiento se debe realizar para cada especie de pasto a partir de los quince días después de la cosecha y se debe repetir cada 10 días. Luego con los datos recolectados se efectúa un plano cartesiano colocando la fecha en que fue tomada la muestra en el eje X y el peso en kilogramos del aforo en el eje Y, con el fin de determinar la curva de crecimiento de cada especie de pasto. Entre más submuestras tome más preciso será el promedio.

    .row.justify-content-center.my-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
            h5 figura 4.
            span <em>Aforo en zigzag</em>
        figure
          img(src='@/assets/curso/temas/tema4/img43.svg', alt='Se muestra un aforo en zigzag.')
        figcaption Nota. SENA.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10  
        .cajon.color-secundario.p-4(style="background: #DCF6FE")
          p.mt-0.mb-0 Este método es parecido al que se realiza cuando se toman muestras en un terreno para el análisis del suelo, consiste en hacer en un metro cuadrado de 15 a 20 submuestras por cada 10 hectáreas de pasto, esto se debe realizar recorriendo el terreno en zigzag o en forma de Z, los puntos en donde se van a tomar las muestras se deben ubicar de manera aleatoria, con el fin de que la muestra sea representativa. Luego de tomadas las submuestras se pesan y se dividen por el número de submuestras hechas para después hacer el promedio en Kg/m2.
          
    h5.mt-4.green_icon(data-aos="fade-left") Técnicas para la conservación de forrajes
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')


    .row.justify-content-center.my-3
      .col-lg-9(data-aos="fade-right")
        p.my-3 En Colombia la producción bovina se realiza por medio de pastoreo con especies forrajeras porque es económica y requiere de muy poca mano de obra, por lo que se puede decir que la producción bovina es totalmente dependiente de los forrajes para la alimentación de animales.
        p.my-3 Sin embargo, esta dependencia tiene desventajas porque en el país hay muchas variaciones en cuanto al clima y las propiedades físicas del suelo, lo cual conlleva a una disminución de nutrientes y de la calidad de los forrajes, que se denomina “estacionalidad forrajera”.
        p.my-3 Este problema se ve reflejado en las épocas de sequía, porque disminuye la disponibilidad de alimento, lo cual tiene incidencia en el crecimiento y la producción del animal. En épocas de lluvias se tiene más calidad de forrajes que no son conservados y que a veces se le suministran al animal en avanzado estado de madurez, afectando la calidad de su nutrición y producción. A continuación, se describen algunas técnicas de conservación de forrajes como ensilaje,  henificación y henolaje.
        .fnd-2
              p.mb-2 <strong>Ventajas de la conservación de forrajes:</strong>
              ul.mt-0 
                li
                  span Al aumentar la disponibilidad de forrajes se aprovecha de manera eficiente el uso del suelo y se pueden alimentar más animales por potrero.
              ul.mt-0 
                li
                  span Se pueden guardar reservas de alimento en épocas de escases, asegurando una producción bovina durante todo un año.
              ul.mt-0 
                li
                  span Se pueden aprovechar los forrajes que se produjeron en épocas de lluvias, los cuales generalmente se desaprovechan por el pisoteo del animal.
              ul.mt-0 
                li
                  span Aumenta la vida útil de las leguminosas y por medio de la fermentación se reduce el peligro de timpanismo, causado por el consumo de leguminosas tiernas.    
      .col-lg-3.col-md-4.align-content-end(data-aos="fade-up").align-content-center
        img.my-3(src='@/assets/curso/temas/tema4/img44.png', alt='Imagen decorativa')(style="min-height: 550px")

    .row.justify-content-center
      .col-lg-10
        .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema4/img45.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0(data-aos="zoom-in") Ensilaje

        p.my-3 Este proceso consiste en conservar por medio de fermentación anaeróbica forrajes verdes, esta técnica conserva el valor nutritivo y la palatabilidad para el animal. Los pastos más apropiados para ensilar son los que tienen buena relación hoja – tallo, es decir, especies que desarrollan buen follaje. Las plantas que suelen utilizarse para ensilar son el sorgo, el maíz y residuos de cosecha.

        .row.fnd-img-3
          .col-lg-4.col-md-8
            img.my-3(src='@/assets/curso/temas/tema4/img47.png', alt='Imagen decorativa')
          .col-lg-8.p-4
            p.mb-2 <strong>¿Por qué se debe realizar aforo en un potrero?</strong>
              ul.mt-0
                li
                  span La razón más relevante es para poder determinar la cantidad de pasto existente por lote y así poder planificar de forma eficaz el pastoreo.
              ul.mt-0
                li
                  span Este método sirve para hacer un pastoreo continuo haciendo rotación de lotes.
              ul.mt-0
                li
                  span Esto se hace para controlar la cantidad de pasto y así evitar que no se agote este recurso en zonas de pastoreo.
              ul.mt-0
                li
                  span Cuando se determina la cantidad de pasto producido por hectárea se puede determinar la carga del animal.
    h5.mt-4.green_icon(data-aos="fade-left") Principios de conservación del ensilaje
      img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')

    p.my-3 Cuando se diseña un silo, el objetivo más importante es reducir en lo posible los factores que pueden causar daño al material a ensilar como microorganismos patógenos presentes en el ambiente. Para realizar un ensilaje de buena calidad se debe mantener una temperatura adecuada de 30ºC, buena ventilación y disponer de buen alimento para que las bacterias benéficas crezcan.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img48.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Mediante la generación de estas bacterias se forman sustratos de pH entre 4,2 - 3,8, lo que hace que mueran las bacterias peligrosas. En el ensilado se da un proceso llamado fermentación en el cual se generan células vegetales que mueren difundiendo los carbohidratos, grasas y proteínas en la masa a ensilar.
        p <br>Las bacterias que se generan mediante este proceso secretan enzimas  que hacen que los carbohidratos se transformen en sustancias más simples. Dentro de los microorganismos que generan están las bacterias ácido-lácticas, bacterias butíricas, levaduras, hongos y gérmenes de la putrefacción.

    p.my-3 De todos estos microorganismos, las bacterias ácido-lácticas son las que se deben generar en el ensilaje, pues son las que hacen que se prolongue la vida útil del forraje, por tal razón es importante realizar el proceso de ensilado y generar las condiciones óptimas para que se produzcan dichas bacterias.

    .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
      .col-lg-3.col-md-5.my-3
        figure
          img.my-3(src="@/assets/curso/temas/tema4/img49.png")
      .col-lg-6
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-3.fnd-4
            p.mb-0 <strong>De montón:</strong> este tipo de silo se hace colocando un plástico en una superficie sobre la cual se van a poner las capas de pasto que se van compactando, luego se cubre con otro plástico evitando que entre aire y encima del silo se ponen objetos pesados. Esta técnica es muy usada para productores con gran número de animales.
          .tarjeta.tarjeta--slyder.p-3.fnd-4
            p.mb-0 <strong>Silo de trinchera:</strong> se hace una zanja con una leve inclinación, la cual puede ser cubierta con cemento o con ladrillo. La capacidad del silo depende de la necesidad del productor.
          .tarjeta.tarjeta--slyder.p-3.fnd-4
            p.mb-0 <strong>Silo de bolsa:</strong> esta técnica consiste en introducir el material en capas en una bolsa plástica calibre 6 - 8 de 30 a 40 kg. El material para ensilar debe estar bien picado para evitar que la bolsa se rompa. Cada vez que se introduce una capa se adiciona melaza y se le realiza presión con el fin de que no quede aire y se almacena en un lugar libre de roedores. Esta técnica es económica porque no requiere maquinaria y se puede utilizar después de transcurrido un mes de almacenamiento.	 
          .tarjeta.tarjeta--slyder.p-3.fnd-4
            p.mb-0 <strong>Silo de caneca plástica:</strong> esta técnica cosiste en introducir pasto bien picado en una caneca y a medida que se incorpora el material vegetal se va compactando, mediante este método de conservación se puede ensilar más pasto que con el método de bolsa.
          .tarjeta.tarjeta--slyder.p-3.fnd-4
            p.mb-0 <strong>Silo de bunker:</strong> esta técnica se parece a la de silo de trinchera con la diferencia de que esta solo tiene dos paredes inclinadas y los extremos están abiertos.
    

    .row.justify-content-center.my-4
      .col-lg-10
        h5.mt-4.green_icon(data-aos="fade-left") Heno
          img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')
        p.my-3 El heno es un producto que resulta de reducir la cantidad de agua de 15 a 25% en el forraje. Cuando el heno se ha secado bien puede ser almacenado, siendo este producto la fuente más económica de nutrientes para los animales, con excepción del pastoreo directo. 
        p.my-3 El objetivo principal de hacer heno es aprovechar el pasto que se produce en época de lluvias, para luego suministrarlo al ganado en épocas duras como sequías o lluvias intensas. Con la implementación de esta técnica se puede mantener un alto nivel por año en la ganadería.
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
            h5 figura 5.
            span <em>Especies de heno</em>
        figure
          img(src='@/assets/curso/temas/tema4/img50.svg', alt='Imagen decorativa')
        figcaption Nota. SENA.

    .row.justify-content-center.my-4
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
            h5 Tabla 2.
            span <em>Calidad nutritiva</em>
        .tabla-b
          table.text-center
            caption Fuente: Franco, Calero y Ávila (2007)
            thead
              tr
                th.text-light(colspan="5")(style="background: #575F19; border: 1.2px solid #000000") Calidad nutritiva en henos de algunas especies forrajeras:
              tr
                th(style="background: #B1BF34; border: 1.2px solid #000000") Reforestación protectora
                th(style="border: 1.2px solid #000000; background: white") Materia seca %
                th(style="border: 1.2px solid #000000; background: white") Proteína cruda %
                th(style="border: 1.2px solid #000000; background: white") Fibra detergente neutra %
                th(style="border: 1.2px solid #000000; background: white") Digestibilidad in vitro de la MS %
            tbody
              tr
                td Maní forrajero
                td 92.8
                td 14.0
                td 52.0
                td 67.0
              tr
                td Caupí
                td 94.0
                td 19.2
                td 60.0
                td 69.0
              tr
                td Canavalia
                td 93.0
                td 17.0
                td 60.0
                td 61.0
              tr
                td Cratylia
                td 91.0
                td 19.0
                td 67.0
                td 45.0
              tr
                td Mulato
                td 92.0
                td 9.1 
                td 66.0
                td 67.0
              tr
                td Toledo
                td 90.0
                td 9.2
                td 73.2
                td 64.0

    .row.justify-content-center.my-3
      .col-lg-10  
        .cajon.color-secundario.p-4(style="background: #DCF6FE")
          p.mt-0.mb-0 El heno puede ser usado para la alimentación animal brindándole energía y vitaminas a este, siendo una técnica menos costosa que los concentrados. La suplementación en bovinos puede estar en un 0.5 a 1.0% del peso vivo del animal, lo que constituye alrededor de 5 kg por rumiante, esta cantidad puede aumentar cuando el ganado se ha acostumbrado al heno.

    .row.justify-content-center.my-3 
      .col-lg-10
        h5.mt-4.green_icon(data-aos="fade-left") Elaboración y manejo manual de heno
          img.my-3(src='@/assets/curso/temas/tema3/green_icon-2.svg', alt='Imagen decorativa')
        .titulo-sexto.color-acento-contenido.mb-3.my-3(data-aos="fade-left")
            h5 figura 6.
            span <em>Manejo manual del heno</em>
        figure
          img(src='@/assets/curso/temas/tema4/img51.svg', alt='Se muestra un procedimiento de manual de heno.')
        figcaption Nota. SENA.
 



</template>

<script>
export default {
  name: 'Tema4',
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
