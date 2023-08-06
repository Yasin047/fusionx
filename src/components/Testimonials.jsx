import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedBackCard";
import game from "../assets/game.png"; // Replace "game.jpg" with the actual image file name and path

const Testimonials = () => (
  <section id="games" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full md:mt-0 mt-6 flex items-center">
      <div>
        <h2 className={styles.heading2}>
          Play2Earn Games <br className="sm:block hidden" /> will earn you rewards
        </h2>
        <p className={`${styles.paragraph} max-w-[450px]`}>
         Play2Earn gaming will play an important role in FusionX universe, First game will be simple dice game and we will gradually launch more feature enrich games.
         
        </p>
      </div>
      <img src={game} alt="Testimonial" className="max-w-[400px] ml-auto" />
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
