import { render } from "@testing-library/react";
import Carousel from "./Carousel";

test("renders carousel", () => {
  render(
    <Carousel>
      <div>1</div>
      <div>2</div>
    </Carousel>
  );
});