import { Container} from "@mui/material";
const Canvas= () => {
  return (
    <Container className="can">
      <div class="landscape"></div>
      <div class="filter"></div>
      <canvas id="canvas"></canvas>
    </Container>
  );
};

export default Canvas;
