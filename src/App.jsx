import { Typography } from "@mui/material";
import { Form } from "react";

const App = () => {
  return (
    <div>
      <Form>
        <Typography variant="h1" component="h1" />
        <input type="text" name="name" />
        <input type="email" name="email" value="" />
      </Form>
    </div>
  );
};

export default App;
