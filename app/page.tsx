import BentoGrid from "@/components/BentoGrid";
import BentoItem from "@/components/BentoItem";

const Home = () => {
  return (
    <BentoGrid>
      <BentoItem
        className="bg-blue-500 p-4"
        colStart="col-start-1"
        colSpan="col-span-6"
        rowStart="row-start-1"
        rowSpan="row-span-2"
      >
        Element 1
      </BentoItem>
      <BentoItem
        className="bg-blue-500 p-4"
        colStart="col-start-7"
        colSpan="col-span-4"
        rowStart="row-start-1"
        rowSpan="row-span-4"
      >
        Element 2
      </BentoItem>
      <BentoItem
        className="bg-blue-500 p-4"
        colStart="col-start-1"
        colSpan="col-span-2"
        rowStart="row-start-3"
        rowSpan="row-span-6"
      >
        Element 3
      </BentoItem>
      <BentoItem
        className="bg-blue-500 p-4"
        colStart="col-start-1"
        colSpan="col-span-12"
        rowStart="row-start-9"
        rowSpan="row-span-2"
      >
        Element 4
      </BentoItem>
    </BentoGrid>
  );
};

export default Home;
