import React, {useState} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel,
    TextField,
    styled,
    tableCellClasses,
} from '@mui/material';
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#dddddd",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
    const stabilizedArray = array.map((el, index) => [el, index]);
    stabilizedArray.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedArray.map((el) => el[0]);
};

const SongTable = () => {
    const songs = useSelector((state) => state.songs.songs); // Access songs state

    ////// Filtering and Sorting /////////////
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('songName');
    const [filterText, setFilterText] = useState('');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleFilter = (event) => {
        setFilterText(event.target.value);
    };

    const filteredRows = [...songs].filter((row) =>
        row.songName.toLowerCase().includes(filterText.toLowerCase()) ||
        row.artist.toLowerCase().includes(filterText.toLowerCase())
    );

    ////////////////////////////////////////////////////

    return (
        <Paper sx={{ width: '80%', mb: 2, backgroundColor: 'Transparent', marginTop: "80px" }}>
            <Typography sx={{fontSize: "48px", fontStyle: "Bold", fontFamily: "Arial Black", color: "#555555"}}>Songs List</Typography>
            <TextField
                label="Filter by Song Name or Artist"
                variant="outlined"
                fullWidth
                value={filterText}
                onChange={handleFilter}
                sx={{width: "30%", float: "right"}}
            />
            <TableContainer>
                <Table sx={{ minWidth: 750, height: 250 }} aria-label="song table with sorting and filtering">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={orderBy === 'songName'}
                                    direction={orderBy === 'songName' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'songName')}
                                >
                                    Song Name
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={orderBy === 'artist'}
                                    direction={orderBy === 'artist' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'artist')}
                                >
                                    Artist
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={orderBy === 'date'}
                                    direction={orderBy === 'date' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'date')}
                                >
                                    Date
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={orderBy === 'count'}
                                    direction={orderBy === 'count' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'count')}
                                >
                                    Count
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={orderBy === 'userID'}
                                    direction={orderBy === 'userID' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'userID')}
                                >
                                    UserID
                                </TableSortLabel>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stableSort(filteredRows, getComparator(order, orderBy)).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.songName}</TableCell>
                                <TableCell>{row.artist}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.count}</TableCell>
                                <TableCell>{row.userID}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default SongTable;