

import React from 'react';
import Box from '@mui/material/Box';
export default function ProductList(props) {
const { allproduct } = props;

  return (
    <div>
      <h1>Product List</h1>
    
      <div>
        {allproduct.map((product) => 
        <Box component="section" sx={{ p: 2, border: '1px dashed black' }}>
          <div key={product.code}>
            <h3>{product.Name}</h3>
            <p>Elements: {product.element}</p>
          </div> 
        </Box>
        )}
        </div>
</div>
);
  
}







