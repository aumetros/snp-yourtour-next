import FindTour from "@/components/FindTour/FindTour";
import ChooseTour from "@/components/ChooseTour/ChooseTour";
import CollectTour from "@/components/CollectTour/CollectTour";
import Review from "@/components/Review/Review";
import Gallery from "@/components/Gallery/Gallery";
import Stories from "@/components/Stories/Stories";
import Mail from "@/components/Mail/Mail";

export default function Main() {
  return (
    <main>
      <FindTour />
      <ChooseTour />
      <CollectTour />
      <Review />
      <Gallery />
      <Stories />
      <Mail />
    </main>
  )
}