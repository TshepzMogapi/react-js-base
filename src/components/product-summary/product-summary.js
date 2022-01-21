
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const ProductSummary = () => {
  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
      <CardContent>
          <div variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductSummary;