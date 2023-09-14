import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../App.css';


interface CryptoListProps {
    cryptoData: Array<{
      id: number;
      name: string;
      symbol: string;
      current_price: number;
      market_cap: number;
    }>;
  }
function CryptoList({ cryptoData }: CryptoListProps) {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ background: '#98D7C2' }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Price (USD)</TableCell>
            <TableCell align="right">Market Cap (USD)</TableCell>

          </TableRow>
        </TableHead>
        <TableBody style={{ background: '#DDFFE7' }}>
          {cryptoData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.symbol}</TableCell>
              <TableCell align="right">{row.current_price.toFixed(2)}</TableCell>
              <TableCell align="right">{row.market_cap.toLocaleString()}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CryptoList;