import ChooseTour from "../ChooseTour/ChooseTour";
import CollectTour from "../CollectTour/CollectTour";
import Review from "../Review/Review";
import Gallery from "../Gallery/Gallery";
import Stories from "../Stories/Stories";
import Mail from "../Mail/Mail";

export default function Main() {
  return (
    <main>
      <ChooseTour />
      <CollectTour />
      <Review />
      <Gallery />
      <Stories />
      <Mail />
    </main>
  )
}