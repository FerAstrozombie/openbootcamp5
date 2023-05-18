import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings, } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"

const getIcon = (icono) => {
    switch (icono) {
        case "HOME":
            return (<Home />)
        case "TASKS":
            return (<Home />)
        case "SETTINGS":
            return (<Settings />)
        default:
            return (<Home />)
    }
}

const MenuListItems = ({list}) => {

    const navigate = useNavigate();

    const navegar = (path) => {
        navigate(path)
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) =>
                (
                    <ListItem key={index} button onClick={() => navegar(path)}>
                        <ListItemIcon>
                            { getIcon(icon) }
                        </ListItemIcon>
                        <ListItemText
                            primary={text}
                        />
                    </ListItem>
                )
            )}
        </List>
    )
}

export default MenuListItems;

