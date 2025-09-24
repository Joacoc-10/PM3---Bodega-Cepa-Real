import ContactStyle from "../Contact/Contact.module.css";
import bodega from "../../assets/bodegaCepaRea;1.jpeg";
import bodega1 from "../../assets/copasdevino.jpg";
import botellas from "../../assets/botellas de vino.jpg";
import catacion from "../../assets/catacion1.jpeg";
import cepaReal from "../../assets/vinedo_aereo.jpg";
import terraza from "../../assets/terrazaBodega.jpeg";
import vinedos from "../../assets/vinedos.jpg";
import restaurante from "../../assets/restauranteBodega.jpeg";
import catacion2 from "../../assets/catacion2.jpeg";

const Contact = () => {
  return (
    <>
      <section className={ContactStyle.contactContainer}>
        <div className={ContactStyle.imageGroup}>
          <img src={bodega} className={ContactStyle.thumbnailImage} />
          <img src={cepaReal} className={ContactStyle.thumbnailImage} />
          <img src={botellas} className={ContactStyle.thumbnailImage} />
        </div>

        <div
          className={`${ContactStyle.imageGroup} ${ContactStyle.imageGroupMidLeft}`}
        >
          <img src={vinedos} className={ContactStyle.thumbnailImage} />
          <img src={restaurante} className={ContactStyle.thumbnailImage} />
          <img src={catacion2} className={ContactStyle.thumbnailImage} />
        </div>

        <div className={ContactStyle.contactBox}>
          <h2> Contactenos para mas informacion</h2>

          <ul className={ContactStyle.contactList}>
            <li>
              <strong> Telefono: </strong>
              <a href="tel:+34624789443 ">+34624789443</a>
            </li>
            <li>
              <strong> Email: </strong>
              <a href="CepaReal@Bodega.com">CepaReal@Bodega.com</a>
            </li>
          </ul>
        </div>

        <div className={ContactStyle.imageGroup}>
          <img src={catacion} className={ContactStyle.thumbnailImage} />
          <img src={bodega1} className={ContactStyle.thumbnailImage} />
          <img src={terraza} className={ContactStyle.thumbnailImage} />
        </div>
      </section>
    </>
  );
};

export default Contact;
