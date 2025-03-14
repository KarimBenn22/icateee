import ChairsSection from "@/app/components/sections/Chairs";
import CommitteeSection from "@/app/components/sections/Commitee";
import ConferenceParticipants from "../components/sections/ConferenceParticipants";
export default function CommiteesPage() {
  return (
    <main className="flex flex-col items-center">
      <ChairsSection></ChairsSection>
      <CommitteeSection></CommitteeSection>
      <ConferenceParticipants />
    </main>
  );
}
