import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


//Material-ui simple star rating component
export default function SimpleRating() {
  const [value, setValue] = React.useState<number | null>(5);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="star"
          value={value}
          onChange={(event: any, newValue: React.SetStateAction<number | null>) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}
