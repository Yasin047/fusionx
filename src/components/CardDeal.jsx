import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        NFTs are Auto Staked <br className="sm:block hidden" /> Earn reward 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Utility NFTs will earn you dual reward in FUSX and a Coin users will be able to claim reward, The APR would be 60%.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;