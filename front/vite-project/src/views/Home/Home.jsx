import homeStyles from "../Home/Home.module.css";
import fotoAerea from "../../assets/vinedo_aereo.jpg";
import botellasVino from "../../assets/botellas de vino.jpg";
import copasVino from "../../assets/copasdevino.jpg";
import vinedo from "../../assets/vinedos.jpg";
import parraUvas from "../../assets/parradeuvas.jpg";
import bodegaCepaReal from "../../assets/bodegaCepaRea;1.jpeg";
import restaurante from "../../assets/restauranteBodega.jpeg";
import terrazaBodega from "../../assets/terrazaBodega.jpeg";
import catacion1 from "../../assets/catacion1.jpeg";
import Catas from "../Catas/Catas";

const Home = () => {
  return (
    <div>
      <section>
        <h2 className={homeStyles.titulos}> Conoce nuestra historia </h2>

        <div>
          <p className={homeStyles.parrafoHistoria}>
            En el año 1930, en un rincón idílico de la vibrante isla de Ibiza,
            nació un sueño que se arraigaría profundamente en la tierra y en el
            corazón de una familia: Bodega Cepa Real. Fundada por la visión y el
            arduo trabajo de los abuelos de la actual generación, lo que comenzó
            como un modesto viñedo familiar dedicado a la producción local de
            vino, se ha transformado hoy en un referente de la viticultura en
            España. Desde sus inicios, la familia detrás de Bodega Cepa Real se
            ha dedicado con pasión a la tierra, cultivando las vides con un
            respeto ancestral por la tradición y la sabiduría transmitida de
            generación en generación. Sus primeros vinos eran el reflejo puro
            del terruño ibicenco, embotellando la esencia de la isla en cada
            gota y compartiéndola con la comunidad local y los primeros
            visitantes que llegaban a descubrir los encantos de Ibiza.
          </p>
          <div className={homeStyles.contenedorFotos}>
            <img src={fotoAerea} className={homeStyles.fotoAerea}></img>
            <img src={vinedo} className={homeStyles.fotoAerea}></img>
            <img src={parraUvas} className={homeStyles.fotoAerea}></img>
          </div>
        </div>

        <div>
          <p className={homeStyles.parrafoHistoria}>
            Durante décadas, la bodega se mantuvo fiel a sus raíces,
            perfeccionando sus técnicas y adaptándose a los desafíos del clima
            mediterráneo, siempre con un compromiso inquebrantable con la
            calidad. Sin embargo, ha sido en los últimos años cuando Bodega Cepa
            Real ha experimentado un crecimiento exponencial. La visión y el
            dinamismo de la nueva generación, al frente de la bodega, han sabido
            combinar la rica herencia familiar con una mirada innovadora y
            estratégica. Han modernizado las instalaciones sin perder su
            esencia, han invertido en tecnología punta y han expandido su
            presencia en mercados nacionales e internacionales, llevando el
            sabor único de Ibiza a paladares de todo el mundo.
          </p>
          <div className={homeStyles.contenedorFotos}>
            <img src={botellasVino} className={homeStyles.fotoAerea}></img>
            <img src={copasVino} className={homeStyles.fotoAerea}></img>
            <img src={bodegaCepaReal} className={homeStyles.fotoAerea}></img>
          </div>
        </div>

        <div>
          <p className={homeStyles.parrafoHistoria}>
            Hoy, Bodega Cepa Real no es solo una empresa; es el legado vivo de
            una familia que, a lo largo de casi un siglo, ha sabido hacer de su
            pasión por el vino una historia de éxito, arraigada en la magia de
            Ibiza y proyectada hacia el futuro. Sus vinos son la expresión de su
            historia, de su tierra y de un compromiso inquebrantable con la
            excelencia.
          </p>

          <div className={homeStyles.contenedorFotos}>
            <img src={restaurante} className={homeStyles.fotoAerea}></img>
            <img src={terrazaBodega} className={homeStyles.fotoAerea}></img>
            <img src={catacion1} className={homeStyles.fotoAerea}></img>
          </div>
        </div>
      </section>
      <Catas />
    </div>
  );
};

export default Home;
