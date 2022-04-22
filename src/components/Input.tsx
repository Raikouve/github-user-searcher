import { TextField } from "@mui/material"
import { ChangeEventHandler } from "react";

function SearchInput(props: { username: unknown; setSearch: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined; }) {
  return (
    <section>
      <TextField
        // sx={{ input: { color: 'white' } }}
        className="inputField"
        helperText=" "
        label="User"
        type="text"
        placeholder="Octopod"
        value={props.username}
        onChange={props.setSearch}
        // onKeyPress={(event) => {(event.key === 'Enter' ? props.getUser() : null)}}
      />
    </section>
  )
}

export default SearchInput;