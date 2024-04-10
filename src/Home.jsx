import Navbar from "/src/components/NavBar";
import DefaultButton, { SignUpButton, LoginButton, GetStartedButton, PlayVideoButton } from "/src/components/Buttons"
import SearchBar from "/src/components/Search";
import WhiskeyImg from "/src/assets/whiskeyHero.jpg";
import style from "/src/styles/home.module.css";

export default function Home() {
  return (
    <div className={`${style.homeContainer}`}>
          <Navbar />
          <div className={`${style.homeContentContainer}`}>
                <div className={`${style.homeContent}`}>
                        <div>
                                <h1>Savour the Flavour of Whiskey.</h1>
                        </div>
                        <div>
                                <p>It's a long established fact that a reader will be distracted by the readable content of a page when look at its layout.</p>
                        </div>
                        <div className={`${style.buttonsContainer}`}>
                                <div>
                                        <PlayVideoButton />
                                </div>
                                <div>
                                        <GetStartedButton />
                                </div>
                        </div>
                </div>
                <div id={`${style.homeHero}`}>
                        <img src={WhiskeyImg} alt="Whiskey with no ice."></img>
                </div>
          </div> 
    </div>
  );
}
