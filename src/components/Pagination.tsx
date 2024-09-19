import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../features/blogSlice";
import { RootState } from "../app/store";

export default function MuiPagination() {
  const dispatch = useDispatch();
  const { blogs, itemsPerPage, currentPage } = useSelector(
    (state: RootState) => state.blog
  );

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        shape="rounded"
      />
    </Stack>
  );
}