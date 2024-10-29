import React, { useEffect } from "react";
import { Button, Dropdown, MenuButton, MenuItem, Stack, Menu } from "@mui/joy";
import HeaderMenu from "./menu";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const Header = () => {
  useEffect(() => {}, []);

  return (
    <header id="header" className="header">
      <Stack direction={"row"} spacing={1}>
        {HeaderMenu.map((ele, i) =>
          !ele?.isDropdown ? (
            <Button key={i} color="primary" variant="outlined">
              {ele?.label}
            </Button>
          ) : (
            <Dropdown>
              <MenuButton
                color="primary"
                endDecorator={<ArrowDropDownCircleOutlinedIcon />}
              >
                {ele?.label}
              </MenuButton>
              <Menu>
                {ele?.items?.map((item, i) => (
                  <MenuItem>{item?.label}</MenuItem>
                ))}
              </Menu>
            </Dropdown>
          ),
        )}
      </Stack>
    </header>
  );
};

export default Header;
