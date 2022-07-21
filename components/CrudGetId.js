import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { deepOrange, deepPurple } from "@mui/material/colors";

const CrudGetId = () => {

  const basicUrl = "http://localhost:8080/api/quote/";
  const [url, setUrl] = useState("");
  const [id, setId] = useState(0);
  const [quote, setQuote] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setQuote(data);
    } catch (err) {}
  };

  useEffect(() => {
    setUrl(basicUrl + id);
    fetchData();
  }, [id]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // Set minimum user entry to O
  const inputProps = {
    min: 0,
  };

  return (
    <div>
      <br></br>

      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          label="Enter the ID :"
          fullWidth
          id="fullWidth"
          type="number"
          variant="filled"
          color="secondary"
          inputProps={inputProps}
          value={id}
          onChange={(e) => setId(parseInt(e.target.value))}
        />
      </Box>
      <Stack
        direction="row"
        spacing={10}
        justifyContent="center"
        alignItems="center"
      >
        <div style={{ fontSize: "50px" }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {/* // Elevator */}
              <Grid item xs={6}>
                <Item>
                  <div style={{ color: "red", fontSize: "30px" }}>
                    Elevators
                    <Avatar
                      sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}
                    >
                      {quote.num_elev}
                    </Avatar>
                  </div>
                </Item>
              </Grid>

              {/* // Appartment */}
              <Grid item xs={6}>
                <Item>
                  Appartments
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}
                  >
                    {quote.num_apts}
                  </Avatar>
                </Item>
              </Grid>

              {/* // Floors */}
              <Grid item xs={6}>
                <Item>
                  Floors
                  <Avatar
                    sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}
                  >
                    {quote.num_floors}
                  </Avatar>
                </Item>
              </Grid>

              {/* // Basements */}
              <Grid item xs={6}>
                <Item>
                  Basements
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}
                  >
                    {quote.num_base}
                  </Avatar>
                </Item>
              </Grid>

              {/* // Compagnies */}
              <Grid item xs={6}>
                <Item>
                  Compagnie
                  <Avatar
                    sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}
                  >
                    {quote.num_comp}
                  </Avatar>
                </Item>
              </Grid>

              {/* // Parking */}
              <Grid item xs={6}>
                <Item>
                  Parking
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}
                  >
                    {quote.num_park}
                  </Avatar>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Stack>
    </div>
  );
};

export default CrudGetId;
