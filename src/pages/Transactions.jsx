import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Pagination,
  Divider,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { BsFilter, BsSearch } from "react-icons/bs";
import { OutlineButton } from "../shared/components/CustomButtons";
import { InputTextField } from "../shared/components/InputField";
import { tableData } from "../shared/constants";

function Transactions() {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = useMemo(() => {
    return () => {
      return tableData.filter(
        (data) =>
          data.customer_name.toLowerCase().includes(searchItem) ||
          data.customer_email.toLowerCase().includes(searchItem)
      );
    };
  }, [searchItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItem(search);
  };

  return (
    <>
      <div className="flex flex-col gap-3 border-[1px] p-2 rounded-md">
        <h3 className="text-[]">Transaction History</h3>
        <Divider />
        <div className="flex items-center  px-2 justify-between">
          <InputTextField
            endIcon={
              <BsSearch className="text-[18px] " onClick={handleSubmit} />
            }
            styles={{
              width: "250px",
            }}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />

          <div className="flex gap-2 ">
            <OutlineButton
              endIcon={<BsFilter />}
              title="Filter"
              styles={{
                color: "#000",
              }}
            />
            <OutlineButton
              title="Export"
              styles={{
                color: "#000",
              }}
            />
          </div>
        </div>
        <Divider />
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table
            aria-label="simple table"
            sx={{
              minWidth: 650,
            }}
          >
            <TableHead className="bg-white">
              <TableRow>
                {[
                  "Transaction ID",
                  "Source",
                  "Customer name",
                  "Customer email",
                  "Amount",
                  "Request date",
                  "Status",
                ].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Quicksand",
                    }}
                    key={head}
                    align="left"
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {handleSearch()
                ?.slice((page - 1) * 4, (page - 1) * 4 + 4)
                .map((row) => (
                  <TableRow
                    className="cursor-pointer  bg-[#fff] hover:bg-[#e6e6e673]"
                    key={row.transaction_id}
                  >
                    <TableCell align="left">{row.transaction_id}</TableCell>
                    <TableCell align="left">{row.source}</TableCell>
                    <TableCell align="left">{row.customer_name}</TableCell>
                    <TableCell align="left">{row.customer_email}</TableCell>
                    <TableCell align="left">{row.amount}</TableCell>
                    <TableCell align="left">{row.request_date}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />

        <Pagination
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
          count={(handleSearch()?.length / 4).toFixed(0)}
          className="p-[20px] w-full flex justify-center font-quicksand"
          classes={{ ul: "text-black" }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </div>
    </>
  );
}

export default Transactions;
