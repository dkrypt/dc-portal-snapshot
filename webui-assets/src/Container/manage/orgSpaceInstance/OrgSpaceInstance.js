import React from "react";
import { Grid } from "react-bootstrap";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import NativeSelect from "@material-ui/core/NativeSelect";
import Category from "./Category.js";

const Orgspaceinstance = (props) => {
  const [org, setorg] = React.useState("");
  const [space, setspace] = React.useState("");
  const [instance, setinstance] = React.useState("");
  console.log("instance", instance);
  //HandleChange
  const handleChanges = (event) => {
    switch (event.target.id) {
      case "instance":
        setinstance(event.target.value);
        break;
      case "space":
        setspace(event.target.value);
        break;
      case "org":
        setorg(event.target.value);
        break;
      default:
    }
  };
  /* 
  //Handle Org
  const handleChange = (event) => {
    setorg(event.target.value);
  };

  //Handle Space
  const handleChangeSpace = (event) => {
    setspace(event.target.value);
  };

  //Handle Instance
  const handleChangeInstane = (event) => {
    setinstance(event.target.value);
  };
  //   console.log("org", org); */
  return (
    <div>
      <Grid container spacing={2}>
        <Category innerText={org} heading="org" handleChange={handleChanges} />
        <Category
          innerText={space}
          heading="space"
          handleChange={handleChanges}
        />

        {/*  <Grid item md={4} xs={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Org</InputLabel>
            <Select
              native
              value={org}
              onChange={handleChange}
              label="Org"
              //   inputProps={{
              //     name: "age",
              //     id: "outlined-age-native-simple",
              //   }}
            >
              <option aria-label="None" value="" />
              <option value={"org1"}>org1</option>
              <option value={"org2"}>org2</option>
              <option value={"org3"}>org3</option>
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={4} xs={6} style={{ height: "45px" }}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Space</InputLabel>
            <Select
              native
              value={space}
              onChange={handleChangeSpace}
              label="Space"
              //   inputProps={{
              //     name: "age",
              //     id: "outlined-age-native-simple",
              //   }}

            >
              <option aria-label="None" value="" />
              <option value={"space1"}>space1</option>
              <option value={"space2"}>space2</option>
              <option value={"space3"}>space3</option>
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={4} xs={6}>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            style={{ height: "45px" }}
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              Instance
            </InputLabel>
            <Select
              native
              value={instance}
              onChange={handleChangeInstane}
              label="instance"
            
            >
              <option aria-label="None" value="" />
              <option value={"instance1"}>instance1</option>
              <option value={"instance2"}>instance2</option>
              <option value={"instance3"}>instance3</option>
            </Select>
          </FormControl>
        </Grid>
       */}
      </Grid>
    </div>
  );
};
export default Orgspaceinstance;
