import { Button, List, ListItem, Popover, Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import useStyles from './styles';

type CategoriesMenuPropsType = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

function CategoriesMenu(props: CategoriesMenuPropsType) {
  const { categories, selectedCategory, onSelectCategory } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handlePopoverClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleSelectCategory = useCallback(
    (category: string) => () => {
      onSelectCategory(category);
      handlePopoverClose();
    },
    [onSelectCategory, handlePopoverClose]
  );

  const open = Boolean(anchorEl);
  return (
    <>
      <Button
        className={classes.categoriesMenuContainer}
        color="inherit"
        onClick={handlePopoverOpen}
        id="categories-menu-button"
      >
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
        >
          {selectedCategory || 'Categories'}
        </Typography>
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <List disablePadding>
          {categories.map((category: string) => (
            <ListItem
              key={category}
              button
              onClick={handleSelectCategory(category)}
              className="category-item"
            >
              <Typography className={classes.categoryText}>
                {category}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
}

export default CategoriesMenu;
