import style from "/src/styles/search.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
        return (
                <div id={`${style.searchBarContainer}`}>
                        <SearchIcon sx={{ mt: 1, mb: 1, mr: 1.1 }} />
                        <input type="text" placeholder="Search..."/>
                </div>
        )
}
