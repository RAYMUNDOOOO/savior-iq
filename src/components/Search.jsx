import style from "/src/styles/search.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
        return (
                <div id={`${style.searchBarContainer}`}>
                        <SearchIcon />
                        <input type="text" placeholder="Search..."/>
                </div>
        )
}
