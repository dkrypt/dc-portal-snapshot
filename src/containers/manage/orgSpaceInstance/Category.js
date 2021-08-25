// import React from "react";
// import { Grid } from "react-bootstrap";
// import { makeStyles } from "@material-ui/core/styles";
// // import InputLabel from "@material-ui/core/InputLabel";
// // import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// // import Select from "@material-ui/core/Select";
// // import { Height } from "@material-ui/icons";
// import { Form } from "react-bootstrap";

// let Category = (props) => {
//   console.log("props category", props);
//   let { heading, innerText } = props;
//   const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 200,
//       position: "relative",
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//     label: {
//       margin: "-7px",
//     },
//   }));
//   const classes = useStyles();
//   return (
//     <Grid item md={4} xs={6}>
//       <FormControl variant="outlined" className={classes.formControl}>
//         {/* <InputLabel
//           htmlFor="outlined-age-native-simple"
//           className={classes.label}
//         >
//           {heading}
//         </InputLabel> */}
//         {/* <Select
//                     native
//                     value={innerText}
//                     id={innerText}
//                     onChange={props.handleChange}
//                     label={innerText}
//                     style ={{height:"40px"}}

//             >
//               <option aria-label="None" value="" />
//               <option value={"space1"}>Value1</option>
//               <option value={"space2"}>Value2</option>
//               <option value={"space3"}>Value3</option>
//             </Select> */}
//         <Form.Label>{props.heading}</Form.Label>
//         <select
//           class="form-select"
//           aria-label={innerText}
//           value={innerText}
//           id={heading}
//           onChange={props.handleChange}
//           // label={innerText}
//           style={{ height: "40px" }}
//         >
//           <option selected> select </option>
//           <option value="1">One</option>
//           <option value="2">Two</option>
//           <option value="3">Three</option>
//         </select>
//       </FormControl>
//     </Grid>
//   );
// };
// export default Category;
