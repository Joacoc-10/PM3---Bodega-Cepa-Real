import CataStyles from "../Catas/Catas.module.css";

const Catas = () => {
  return (
    <>
      <div className={CataStyles.catasSection}>
        <h1 className={CataStyles.sectionTitle}> Nuestras Catas </h1>
        <p className={CataStyles.sectionDescription}>
          Sumérgete en el mundo de Bodega Cepa Real con una experiencia de cata
          diseñada a tu medida. Desde los aficionados hasta los expertos,
          nuestras propuestas te invitan a descubrir la riqueza de nuestros
          vinos y la belleza de nuestro entorno.
        </p>

        <section className={CataStyles.cardsGrid}>
          <div className={CataStyles.cataCard}>
            <h2 className={CataStyles.cardTitle}>
              1. Tradición en Blanco y Tinto
            </h2>
            <p className={CataStyles.cardDescription}>
              Descubre la esencia de Cepa Real a través de una selección cuidada
              de nuestros vinos más representativos. Esta cata guiada te lleva
              por los matices aromáticos y gustativos de dos blancos vibrantes y
              dos tintos de carácter. Aprenderás sobre las variedades de uva, el
              proceso de elaboración y las notas distintivas de cada copa, ideal
              para quienes buscan una introducción clásica y profunda a nuestra
              bodega.
            </p>
          </div>

          <div className={CataStyles.cataCard}>
            <h2 className={CataStyles.cardTitle}>
              2. Armonías de la Tierra: Vinos y Quesos
            </h2>
            <p className={CataStyles.cardDescription}>
              Descubre la esencia de Cepa Real a través de una selección cuidada
              de nuestros vinos más representativos. Esta cata guiada te lleva
              por los matices aromáticos y gustativos de dos blancos vibrantes y
              dos tintos de carácter. Aprenderás sobre las variedades de uva, el
              proceso de elaboración y las notas distintivas de cada copa, ideal
              para quienes buscan una introducción clásica y profunda a nuestra
              bodega.
            </p>
          </div>

          <div className={CataStyles.cataCard}>
            <h2 className={CataStyles.cardTitle}>
              3. El Legado de Cepa Real: Gran Reserva
            </h2>
            <p className={CataStyles.cardDescription}>
              Para los amantes del vino con historia. Esta cata premium se
              centra en la exclusividad de nuestros vinos Gran Reserva.
              Degustarás tres de nuestras joyas más preciadas, añejadas con
              paciencia y maestría en barricas de roble. Cada sorbo es un viaje
              en el tiempo, acompañado de una charla íntima sobre su proceso de
              guarda, sus características únicas y su potencial de evolución.
            </p>
          </div>

          <div className={CataStyles.cataCard}>
            <h2 className={CataStyles.cardTitle}>
              4. A Caballo por el Viñedo y Brindis al Atardecer
            </h2>
            <p className={CataStyles.cardDescription}>
              Una propuesta que fusiona la aventura con la pasión por el vino.
              Disfruta de un relajante paseo a caballo por nuestros extensos
              viñedos, guiado por expertos locales. Al caer la tarde, el
              recorrido culmina en un mirador exclusivo, donde te espera una
              copa de nuestro mejor Cava o vino rosado espumoso, mientras el sol
              se oculta tras las vides. Una experiencia inolvidable para
              conectar con la naturaleza y el espíritu de la bodega.
            </p>
          </div>

          <div className={CataStyles.cataCard}>
            <h2 className={CataStyles.cardTitle}>
              5. El Arte del Blending: Crea tu Propio Vino
            </h2>
            <p className={CataStyles.cardDescription}>
              Conviértete en enólogo por un día. En esta experiencia interactiva
              y educativa, aprenderás los principios del blending (mezcla de
              vinos) con la guía de uno de nuestros expertos. Tendrás la
              oportunidad de catar diferentes varietales directamente de la
              barrica y crear tu propia mezcla personalizada, llevándote a casa
              una botella única de tu propia creación, embotellada y etiquetada
              por ti mismo.
            </p>
          </div>

          <div className={CataStyles.cataCard}>
            <h2 className={CataStyles.cardTitle}>
              6. Secretos Subterráneos: Cata en Cueva Centenaria
            </h2>
            <p className={CataStyles.cardDescription}>
              Una experiencia inmersiva en la historia. Te invitamos a una cata
              exclusiva en nuestra cueva subterránea centenaria, un lugar con
              una acústica y temperatura perfectas para la guarda del vino.
              Degustarás tres vinos (un blanco de guarda, un tinto joven y un
              tinto crianza) en este ambiente mágico, descubriendo cómo la
              tradición y la historia se entrelazan en cada botella de Cepa
              Real.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Catas;
