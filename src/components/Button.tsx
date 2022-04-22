import { MouseEventHandler } from "react";
import Button from '@mui/material/Button';

type ButtonProps = {
  trigger: MouseEventHandler;
}

function Btn(props: ButtonProps) {
  return (
    <Button variant="contained" type="button" onClick={props.trigger}>
      Search
    </Button>
  )
}

export default Btn;
